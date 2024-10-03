interface ProgressCircleProps {
  progress: number
  size?: number
  strokeWidth?: number
  circleColor?: string
  progressColor?: string
  textColor?: string
}

export default function ProgressCircle({
  progress,
  size = 100,
  strokeWidth = 4,
  circleColor = '#f0f0f0',
  progressColor = '#f87171',
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke={circleColor}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-primary"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke={progressColor}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <span
        className="absolute text-3xl font-semibold bg-foreground-red rounded-full flex items-center justify-center text-background"
        style={{ width: size - 50, height: size - 50 }}
      >
        {progress}%
      </span>
    </div>
  )
}