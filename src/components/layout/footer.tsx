import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG, CONTACT, LOCATION_CONFIG, LINKS } from '@/lib/data'
import { usePortfolioData } from '@/providers/portfolio-provider'
import pkg from '../../../package.json'

const contactLinks = [
    { href: LINKS.email, label: CONTACT.email, Icon: Mail },
    { href: LINKS.whatsapp, label: CONTACT.whatsapp, Icon: FaWhatsapp },
]

const socialLinks = [
    { href: LINKS.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
    { href: LINKS.github, label: 'GitHub', Icon: FaGithub },
]

const styles = {
    heading: 'uppercase label-technical mb-3 font-bold text-muted-foreground/80',
    body: 'text-xs leading-relaxed text-muted-foreground',
    contactLink: 'inline-flex items-center gap-1 text-sm text-sidebar-foreground origin-left transition-transform duration-200 hover:scale-105 hover:text-sidebar-primary',
    contactIcon: 'inline-block mr-1 mt-0.5 size-4',
    socialLink: 'inline-flex items-center',
    socialIcon: 'size-10 shrink-0 border-2 text-sidebar-foreground p-2 rounded-full hover:border-sidebar-ring transition-transform duration-200 hover:scale-105',
}

export function Footer() {
    const { site } = usePortfolioData();

    return (
        <footer className="bg-background text-secondary-foreground border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-6xl mx-auto px-4 py-8">
                <div>
                    <p className={styles.heading}>{site.footer.freelanceTitle}</p>
                    <p className={`${styles.body} max-w-md`}>{site.footer.freelanceBody}</p>
                    <div className="relative mt-4 overflow-hidden rounded-xl border border-primary/20 px-4 py-2 backdrop-blur-md shadow-lg">
                        <div className="absolute -right-10 -top-10 size-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                        <div className="relative z-10 flex items-center gap-2">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ring opacity-75 dark:bg-chart-2" />
                                <span className="relative inline-flex size-2 rounded-full bg-ring dark:bg-chart-2" />
                            </span>
                            <span className="text-xs font-medium text-ring tracking-wide dark:text-chart-2">
                                {site.availability}
                            </span>
                        </div>
                    </div>
                    <div className="relative mt-3 overflow-hidden rounded-xl border border-primary/20 px-4 py-2 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground tabular-nums">
                            <Clock className="size-3.5 shrink-0 text-chart-1" />
                            <div className="flex flex-row gap-1">
                                <span className="text-foreground font-medium">{site.schedule.days}</span>
                                <span className='border-r'></span>
                                <span>{site.schedule.hours}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.heading}>{site.footer.contactTitle}</p>
                    <p className={styles.body}>{site.footer.contactBody}</p>
                    <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                        {contactLinks.map(({ href, label, Icon }) => (
                            <li key={href}>
                                <a href={href} className={styles.contactLink}>
                                    <Icon className={styles.contactIcon} />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={LOCATION_CONFIG.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-10 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-sidebar-primary transition-colors"
                    >
                        <MapPin className="size-4 shrink-0" />
                        {site.locationLabel}
                        <ArrowUpRight className="size-3.5 shrink-0 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-2 text-sm text-muted-foreground/60 md:flex-row md:justify-between">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                        <p>© {new Date().getFullYear()} {SITE_CONFIG.author}. All rights reserved.</p>
                        <span className="hidden sm:inline text-border">•</span>
                        <span className="font-mono text-xs text-muted-foreground/80">
                            v{pkg.version}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ href, label, Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={styles.socialLink}
                            >
                                <Icon className={styles.socialIcon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}