'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main style={{ 
        minHeight: '100vh', 
        background: 'black', 
        color: 'white', 
        position: 'relative',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        border: 'none',
        outline: 'none'
      }}>
        {/* Background image */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          zIndex: 1
        }} />
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }} />
        
        {/* Title - positioned like reference image */}
        <div style={{
          position: 'fixed',
          top: '40px',
          left: '40px',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '900',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            letterSpacing: '2px',
            margin: 0,
            textDecoration: 'underline',
            textDecorationThickness: '2px',
            textUnderlineOffset: '6px'
          }}>
            DELIRARE™
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <div style={{
          position: 'fixed',
          top: '40px',
          right: '40px',
          zIndex: 20,
          cursor: 'pointer'
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={{
            width: '30px',
            height: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{
              width: '100%',
              height: '3px',
              background: 'white',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
            }} />
            <div style={{
              width: '100%',
              height: '3px',
              background: 'white',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1
            }} />
            <div style={{
              width: '100%',
              height: '3px',
              background: 'white',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
            }} />
          </div>
        </div>

        {/* Main content */}
        <div style={{ 
          position: 'relative',
          zIndex: 3,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            padding: '0 40px'
          }}>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              We make AI voices human.
            </p>
            <p style={{
              fontSize: '1.125rem',
              fontStyle: 'italic',
              fontFamily: 'Inter, sans-serif'
            }}>
              In a world of machines, the brands that win sound human.
            </p>
          </div>
        </div>

        {/* Scroll-up Menu Section - Animated */}
        <motion.div 
          style={{
            position: 'relative',
            zIndex: 3,
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '40px',
            paddingLeft: '120px'
          }}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {/* Main Menu Container */}
          <motion.div 
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(15px)',
              borderRadius: '0',
              padding: '40px',
              maxWidth: '400px',
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
            initial={{ x: -200, opacity: 0, filter: 'blur(10px)' }}
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {/* Site Map Section */}
            <div style={{
              marginBottom: '40px'
            }}>
              <motion.div 
                style={{
                  marginBottom: '30px'
                }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="#" 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onClick={() => setActiveSection('home')}
                >
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    marginBottom: '4px'
                  }}>HOME</span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    fontWeight: '300',
                    opacity: 0.7
                  }}>Home Page</span>
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: activeSection === 'home' ? '15px' : '8px',
                      height: '1px',
                      background: 'white'
                    }}
                    animate={{ 
                      width: activeSection === 'home' ? '15px' : '8px'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>

              <motion.div 
                style={{
                  marginBottom: '30px'
                }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a 
                  href="#" 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onClick={() => setActiveSection('about')}
                >
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    marginBottom: '4px'
                  }}>ABOUT</span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    fontWeight: '300',
                    opacity: 0.7
                  }}>About Us</span>
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: activeSection === 'about' ? '15px' : '8px',
                      height: '1px',
                      background: 'white'
                    }}
                    animate={{ 
                      width: activeSection === 'about' ? '15px' : '8px'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                <div style={{
                  marginTop: '15px',
                  paddingLeft: '20px'
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="#" style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                        fontWeight: '300',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        Mission
                      </a>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="#" style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                        fontWeight: '300',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                style={{
                  marginBottom: '30px'
                }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a 
                  href="#" 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onClick={() => setActiveSection('services')}
                >
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    marginBottom: '4px'
                  }}>SERVICES</span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    fontWeight: '300',
                    opacity: 0.7
                  }}>AI Voice Solutions</span>
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: activeSection === 'services' ? '15px' : '8px',
                      height: '1px',
                      background: 'white'
                    }}
                    animate={{ 
                      width: activeSection === 'services' ? '15px' : '8px'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                <div style={{
                  marginTop: '15px',
                  paddingLeft: '20px'
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="#" style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                        fontWeight: '300',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        Voice Architecture
                      </a>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="#" style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                        fontWeight: '300',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1', minWidth: '120px' }}>
                  <a href="#" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onClick={() => setActiveSection('contact')}
                  >
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                      marginBottom: '4px'
                    }}>CONTACT</span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                      fontWeight: '300',
                      opacity: 0.7
                    }}>Get in touch</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '30px'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.8rem',
                fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                fontWeight: '300',
                marginBottom: '15px'
              }}>
                Let's work together
              </p>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <a href="mailto:hello@delirare.ai" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                  fontWeight: '300',
                  transition: 'color 0.3s ease'
                }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
                >
                  hello@delirare.ai
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Full Viewport Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
              background: 'black'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/beam-home.firebasestorage.app/o/delirare%2Fde4fc261387a40916463ece8b5e7498d.jpg?alt=media&token=4dc9ba4e-423f-4991-8544-0a89673b7599')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3
            }} />
            
            {/* Dark Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)'
            }} />

            {/* Header - Keep intact */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              zIndex: 101
            }}>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: '900',
                fontFamily: 'Impact, "Arial Black", sans-serif',
                letterSpacing: '2px',
                margin: 0,
                color: 'white',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '6px'
              }}>
                DELIRARE™
              </h1>
            </div>

            {/* Hamburger Menu Button - Keep intact */}
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              zIndex: 102,
              cursor: 'pointer'
            }}
            onClick={() => setIsMenuOpen(false)}
            >
              <div style={{
                width: '30px',
                height: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  width: '100%',
                  height: '3px',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  transform: 'rotate(45deg) translate(6px, 6px)'
                }} />
                <div style={{
                  width: '100%',
                  height: '3px',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  opacity: 0
                }} />
                <div style={{
                  width: '100%',
                  height: '3px',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  transform: 'rotate(-45deg) translate(6px, -6px)'
                }} />
              </div>
            </div>

            {/* Menu Content */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 101,
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(20px)',
                padding: '60px',
                borderRadius: '0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
                maxWidth: '600px',
                width: '90%'
              }}
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '40px'
              }}>
                {/* Left Column */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    color: 'white',
                    marginBottom: '30px',
                    textDecoration: 'underline',
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '4px'
                  }}>
                    Navigation
                  </h3>
                  <nav>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((item, index) => (
                        <motion.li 
                          key={item}
                          style={{ marginBottom: '20px' }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                            fontWeight: '300',
                            display: 'block',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
                          >
                            {item}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Right Column */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                    color: 'white',
                    marginBottom: '30px',
                    textDecoration: 'underline',
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '4px'
                  }}>
                    Connect
                  </h3>
                  <div style={{ marginBottom: '30px' }}>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '1rem',
                      fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                      fontWeight: '300',
                      marginBottom: '15px'
                    }}>
                      Ready to make your AI voice human?
                    </p>
                    <a href="mailto:hello@delirare.ai" style={{
                      color: '#D4AF37',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                      fontWeight: '400'
                    }}>
                      hello@delirare.ai
                    </a>
                  </div>
                  
                  <div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.9rem',
                      fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                      fontWeight: '300',
                      marginBottom: '15px'
                    }}>
                      Follow us
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '20px'
                    }}>
                      {['Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                        <motion.a
                          key={social}
                          href="#"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontFamily: 'Yu Gothic Pr6N M, sans-serif',
                            fontWeight: '300',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4AF37'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                          {social}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}