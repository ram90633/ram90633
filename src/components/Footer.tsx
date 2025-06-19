import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              GlamourHub
            </h3>
            <p className="text-secondary-300 leading-relaxed">
              Your ultimate destination for premium beauty products. Discover, explore, and embrace your unique beauty journey with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Beauty Tips</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Brand Partners</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">hello@glamourhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © 2025 GlamourHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-secondary-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary-400 fill-current" />
              <span>for beauty enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;