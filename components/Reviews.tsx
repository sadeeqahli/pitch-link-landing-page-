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
    <section id="reviews" className="py-24 bg-[#050505] relative border-t border-brand-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">
            Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {titleNormal} <span className="text-brand">{titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-brand-surface p-8 rounded-2xl border border-brand-border relative hover:border-brand/30 hover:shadow-[0_10px_30px_-15px_rgba(11,218,81,0.15)] transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 text-brand-border w-12 h-12 group-hover:text-brand/10 transition-colors duration-300" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand text-brand opacity-90" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-brand-border flex items-center justify-center text-gray-300 font-semibold text-sm group-hover:border-brand/30 group-hover:text-brand transition-colors duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
