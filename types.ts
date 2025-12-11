import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}