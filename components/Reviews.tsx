
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewsProps {
  testimonials: Testimonial[];
  titleNormal: string;
  titleHighlight: string;
}

const Reviews: React.FC<ReviewsProps> = ({ testimonials, titleNormal, titleHighlight }) => {
  return (
    <section id="reviews" className="py-24 bg-brand-surface relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-widest text-sm mb-2 block"
          >
            Community
          </motion.span>
          <motion.h2 
            key={titleHighlight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white"
          >
            {titleNormal} <span className="text-brand">{titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-black p-8 rounded-2xl border border-gray-800 relative hover:border-brand/30 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-brand/20 w-10 h-10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand text-brand" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-teal-600 flex items-center justify-center text-brand-black font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-brand text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
