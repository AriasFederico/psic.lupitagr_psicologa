import { iconMap } from '../../../data/iconMap';
import { Badge, ButtonCta } from '../../ui';
import { SectionLayout } from '../';
import styles from './LocationSection.module.scss';

export const LocationSection = ({ data }) => {
    const { title, subtitle, cta, badge } = data;
    return (
        <SectionLayout bgVariant={'soft'}>
            <div className={styles.container}>
                <Badge text={badge.label} iconLeft={'online'} className={styles.badge} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.cta}>
                    <ButtonCta icon={cta.icon} variant={cta.variant} label={cta.label} href={cta.href} />
                </div>
            </div>
        </SectionLayout>
    );
};
