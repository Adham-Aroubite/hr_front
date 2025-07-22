// ==== components/Logo.tsx (create this new file) ====
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  href?: string
  className?: string
}

const sizeClasses = {
  sm: "h-6 w-6", // 24px
  md: "h-16 w-16", // 32px  
  lg: "h-12 w-12", // 48px
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-2xl", 
  lg: "text-3xl",
}

export function Logo({ 
  size = "md", 
  showText = true, 
  href = "/",
  className = "" 
}: LogoProps) {
  const logoContent = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/images/small_logo.png"
        alt="TalentFlow Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : 48}
        height={size === "sm" ? 24 : size === "md" ? 32 : 48}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]}`}>
          TalentFlow
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
