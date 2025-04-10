import React, { useState, useEffect, useRef } from 'react';
import { HiChevronDoubleUp } from "react-icons/hi";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import '../styles/Icon.css';

function Icon({ iconPosition = { right: '20px', bottom: '20px' }, menuPosition = { right: '20px', bottom: '80px' } }) {
  const [showScroll, setShowScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuOpenRef = useRef(isMenuOpen);

  const checkScrollTop = () => {
    const scrollY = window.pageYOffset;
    if (scrollY > 400) {
      if (!showScroll) {
        setShowScroll(true);
      }
      if (isMenuOpenRef.current) {
        setIsMenuOpen(false);
      }
    } else {
      if (showScroll) {
        setShowScroll(false);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleMenuItemClick = (targetId) => {
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const scrollTopElement = document.querySelector('.scroll-menu');
      const menuElement = document.querySelector('.menu-scroll');
      if (
        isMenuOpen &&
        !scrollTopElement.contains(event.target) &&
        !(menuElement && menuElement.contains(event.target))
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const menuItems = [
    { title: 'Home ', targetId: 'hork' },
    { title: 'Info Acara', targetId: 'info' },
    { title: 'Story Pengantin', targetId: 'story' },
    { title: 'gallery Pengantin', targetId: 'gallery' },
    { title: 'Rsvp', targetId: 'rsvp' },
    { title: 'Gifts', targetId: 'gifts' },
    { title: 'Back to Top', targetId: 'top' },
    
  ];

  return (
    <>
      {showScroll && (
        <div 
          className={`scroll-menu ${isMenuOpen ? 'active' : ''}`} 
          style={iconPosition} 
          onClick={toggleMenu} 
          aria-label="Scroll menu" 
          aria-expanded={isMenuOpen}
        >
          <HiChevronDoubleUp />
          
        </div>
      )}
      {isMenuOpen && (
        <div className="menu-scroll" style={menuPosition}>
          {menuItems.map(item => (
            <div
              key={item.targetId}
              className="menu-item"
              onClick={() => handleMenuItemClick(item.targetId)}
              role="menuitem"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Icon;