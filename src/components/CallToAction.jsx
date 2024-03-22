import React from 'react';
import { Button } from '@/components/Button'

// CallToAction Component
export const CallToAction = ({ text }) => (
  <Button href="/" variant="primary" className="mt-4">
    {text}
  </Button>
);
