import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../config/siteConfig.js';
export default function WhatsAppButton({ message = 'Hi VINCIT FITNESS, I would like to know more about the gym.', children = 'ENQUIRE ON WHATSAPP', className = 'button button-light', floating = false }) {
  return <a className={`${className}${floating ? ' floating-wa' : ''}`} href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={floating ? 'Contact VINCIT FITNESS on WhatsApp' : undefined}><MessageCircle size={18}/>{children}{floating ? null : <ArrowUpRight size={16}/>}</a>;
}
