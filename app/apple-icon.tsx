import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #7C3AED 0%, #9354FF 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 32,
          fontWeight: 700,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        NP
      </div>
    ),
    {
      ...size,
    }
  )
}
