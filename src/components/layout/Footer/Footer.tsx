import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import ChevronUpIcon from '../../../assets/tablericons/chevron-up.svg?react';
import CodeIcon from '../../../assets/tablericons/code.svg?react';
import { NAV_ITEMS } from '../../../constants/navigation';
import GlassCard from '../../ui/GlassCard/GlassCard';
import './Footer.scss';

export default function Footer() {
    const { t } = useTranslation();
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer className="siteFooter">
            <div className="siteFooter__inner">
                <div className="siteFooter__brand">
                    <span className="siteFooter__brand__icon">
                        <CodeIcon />
                    </span>
                    <span className="siteFooter__brand__name">
                        Daniel Solarte
                    </span>
                    <span className="siteFooter__brand__copyright">
                        © {new Date().getFullYear()}. {t('footer.rights')}
                    </span>
                </div>

                <nav aria-label="Footer Navigation" className="siteFooter__nav">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={isHome ? item.href : `/${item.href}`}
                            className="siteFooter__nav__link"
                        >
                            {t(item.labelKey)}
                        </a>
                    ))}
                </nav>

                <GlassCard
                    as="button"
                    type="button"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    aria-label={t('footer.backToTop')}
                    title={t('footer.backToTop')}
                    className="siteFooter__topBtn"
                >
                    <ChevronUpIcon />
                </GlassCard>
            </div>
        </footer>
    );
}
