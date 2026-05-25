import styles from './SectionTag.module.css'

interface SectionTagProps {
  children: React.ReactNode
  centered?: boolean
}

export default function SectionTag({ children, centered }: SectionTagProps) {
  return (
    <div className={`${styles.tag} ${centered ? styles.centered : ''}`}>
      {children}
    </div>
  )
}
