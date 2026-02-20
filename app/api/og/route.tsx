import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ color: '#10b981', fontSize: '32px', marginRight: '16px' }}>$</span>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 400,
                color: '#e5e5e5',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Alexander Balaban
            </h1>
          </div>
          <p
            style={{
              fontSize: '28px',
              color: '#737373',
              margin: 0,
              marginLeft: '64px',
            }}
          >
            Software Engineer • Writer
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '20px',
            color: '#737373',
            position: 'relative',
          }}
        >
          <span style={{ color: '#10b981' }}>/</span>
          <span>Essays & Thoughts</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
