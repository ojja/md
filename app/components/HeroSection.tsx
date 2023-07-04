import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <>
            <div className="relative px-6 isolate pt-14 lg:px-8">
                <img
                    src="/images/hero_01.webp"
                    alt=""
                    className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
                />
                <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-28">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-primary-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {t('home.title')} ojja
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="flex items-center justify-center mt-10 gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
