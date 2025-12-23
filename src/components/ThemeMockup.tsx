import React from 'react';

const ThemeMockup = () => {
  // Color palette - Dark Forest Green Matrix Theme
  const colors = {
    background: 'hsl(160 8% 8%)',
    card: 'hsl(160 6% 12%)',
    muted: 'hsl(160 5% 16%)',
    primary: 'hsl(150 30% 25%)',
    primaryHover: 'hsl(150 35% 30%)',
    primaryGlow: 'hsl(150 40% 35%)',
    primaryMuted: 'hsl(150 15% 20%)',
    foreground: 'hsl(150 10% 90%)',
    mutedForeground: 'hsl(150 8% 55%)',
    destructive: 'hsl(0 50% 40%)',
  };

  return (
    <div 
      style={{ 
        background: colors.background,
        minHeight: '100vh',
        padding: '48px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <h1 style={{ color: colors.foreground, fontSize: '28px', marginBottom: '8px', fontWeight: 600 }}>
        Dark Forest Green Matrix Theme
      </h1>
      <p style={{ color: colors.mutedForeground, fontSize: '14px', marginBottom: '48px' }}>
        Preview of buttons, cards, and inputs with glass-morphism effects
      </p>

      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        {/* Buttons Section */}
        <div>
          <h2 style={{ color: colors.foreground, fontSize: '18px', marginBottom: '24px', fontWeight: 500 }}>
            Pill Buttons
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Primary Button */}
            <button
              style={{
                background: colors.primary,
                color: colors.foreground,
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: `0 0 20px ${colors.primaryGlow}40`,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.primaryHover;
                e.currentTarget.style.boxShadow = `0 0 30px ${colors.primaryGlow}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.boxShadow = `0 0 20px ${colors.primaryGlow}40`;
              }}
            >
              Primary Button
            </button>

            {/* Outline Button */}
            <button
              style={{
                background: 'transparent',
                color: colors.primaryGlow,
                border: `1px solid ${colors.primaryMuted}`,
                borderRadius: '9999px',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${colors.primaryMuted}50`;
                e.currentTarget.style.borderColor = colors.primaryGlow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = colors.primaryMuted;
              }}
            >
              Outline Button
            </button>

            {/* Ghost Button */}
            <button
              style={{
                background: 'transparent',
                color: colors.mutedForeground,
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.muted;
                e.currentTarget.style.color = colors.foreground;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = colors.mutedForeground;
              }}
            >
              Ghost Button
            </button>

            {/* Destructive Button */}
            <button
              style={{
                background: colors.destructive,
                color: colors.foreground,
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Destructive
            </button>
          </div>
        </div>

        {/* Card Section */}
        <div>
          <h2 style={{ color: colors.foreground, fontSize: '18px', marginBottom: '24px', fontWeight: 500 }}>
            Glass Card
          </h2>
          <div
            style={{
              background: `${colors.card}B3`, // 70% opacity
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: `1px solid ${colors.primaryMuted}80`,
              borderRadius: '16px',
              padding: '24px',
              width: '320px',
              boxShadow: `0 8px 32px ${colors.background}80`,
            }}
          >
            <h3 style={{ color: colors.foreground, fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
              Dashboard Card
            </h3>
            <p style={{ color: colors.mutedForeground, fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              This card uses glass-morphism with a subtle green-tinted border and backdrop blur.
            </p>
            
            {/* Input inside card */}
            <input
              type="text"
              placeholder="Enter something..."
              style={{
                width: '100%',
                background: colors.muted,
                border: `1px solid ${colors.primaryMuted}`,
                borderRadius: '8px',
                padding: '10px 14px',
                color: colors.foreground,
                fontSize: '14px',
                outline: 'none',
                marginBottom: '16px',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.primaryGlow;
                e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primaryGlow}30`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = colors.primaryMuted;
                e.currentTarget.style.boxShadow = 'none';
              }}
            />

            {/* Badges */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={{
                background: colors.primary,
                color: colors.foreground,
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 500,
              }}>
                Active
              </span>
              <span style={{
                background: 'transparent',
                color: colors.primaryGlow,
                border: `1px solid ${colors.primaryMuted}`,
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 500,
              }}>
                Pending
              </span>
            </div>

            <button
              style={{
                width: '100%',
                background: colors.primary,
                color: colors.foreground,
                border: 'none',
                borderRadius: '9999px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: `0 0 15px ${colors.primaryGlow}30`,
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Color Swatches */}
        <div>
          <h2 style={{ color: colors.foreground, fontSize: '18px', marginBottom: '24px', fontWeight: 500 }}>
            Color Palette
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(colors).map(([name, value]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: value,
                    border: `1px solid ${colors.primaryMuted}`,
                  }}
                />
                <div>
                  <div style={{ color: colors.foreground, fontSize: '13px', fontWeight: 500 }}>
                    {name}
                  </div>
                  <div style={{ color: colors.mutedForeground, fontSize: '11px', fontFamily: 'monospace' }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeMockup;
