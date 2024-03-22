import { AiOutlineRight } from 'react-icons/ai';

// BulletPoint Component
export const BulletPoint = ({ text }) => (
  <div className="flex items-center mb-2">
    <AiOutlineRight className="text-primary-500 mr-2" />
    <span className="text-base">{text}</span>
  </div>
);