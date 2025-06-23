'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react'; // Phone от lucide-react
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp от react-icons

export default function PhoneButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Main button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full shadow-lg hover cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Contact options"
            >
                <Phone size={20} />
            </button>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute bottom-20 right-0 flex flex-col gap-3">
                    <a
                        href="tel:+40 732 678 611"
                        className="bg-gradient-to-r from-[#3A7DFF] to-[#0D6EFD] text-white p-4 rounded-md shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
                    >
                        <Phone size={20} />
                        Call
                    </a>
                    <a
                        href="https://wa.me/40732678611"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-md shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
