import { site } from '@/config/site'
import { useLanguage } from '@/i18n/useLanguage'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {site.brandName} · {t.footer}
    </footer>
  )
}
