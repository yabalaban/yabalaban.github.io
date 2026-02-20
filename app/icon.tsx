import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          border: '1px solid #262626',
        }}
      >
        <div
          style={{
            fontSize: '20px',
            color: '#10b981',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}
        >
          $
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
