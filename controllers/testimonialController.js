const { Testimonials } = require('../models');
const { pagination } = require('../utils/paginate');

const getTestimonials = async (req, res, next) => {
  const { limit, page } = req.query;
  try {
    const testimonials = await pagination(Testimonials, {}, page, limit);
    res.json(testimonials);
  } catch (error) {
    next(error);
  }
};

const getOneTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    // codigo
    res.json({ testimonial: `base datos para ${id} testimonial` });
  } catch (error) {
    next(error);
  }
};

const createTestimonial = async (req, res, next) => {
  try {
    const { name, content, image } = req.body;
    const newTestimonial = await Testimonials.create({ name, content, image });
    res.status(201).json({ testimonial: newTestimonial });
  } catch (error) {
    next(error);
  }
};

const updateTestimonial = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    if (!id) throw new Error('Invalid Id');
    const testimonial = await Testimonials.findByPk(id);
    if (!testimonial) throw new Error('Item not found');
    Object.assign(testimonial, data);
    await testimonial.save();

    res.json({ testimonial });
  } catch (error) {
    next(error);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('Invalid Id');
    const testimonial = await Testimonials.findByPk(id);
    if (!testimonial) throw new Error('Item not found');
    await testimonial.destroy();
    res.json({ message: 'Delete Success', testimonial });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTestimonials,
  getOneTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
