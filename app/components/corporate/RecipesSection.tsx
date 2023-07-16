import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getRecipes } from "~/api/corporateAPI";
import Breadcrumbs from "~/components/Breadcrumbs";
import RecipeWidget from "~/components/RecipeWidget";
import Loader from "~/components/Loader";
import RecipeWidgetLoader from "./RecipeWidgetLoader";
import { API_ENDPOINT } from "~/config";

export default function RecipesSection() {
    const { t } = useTranslation();
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMoreEnabled, setIsLoadMoreEnabled] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoadingPage(true);
            try {
                const items = await getRecipes();
                setRecipes(prevItems => [...prevItems, ...items]);
            } catch (error) {
                console.error('Error fetching extra products:', error);
            } finally {
                setIsLoadingPage(false);
            }
        };

        fetchData();
    }, []);

    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    post_type: "recipe",
                    posts_per_page: 8,
                    page: pageNumber + 1
                }),
            };

            const response = await fetch(
                `${API_ENDPOINT}/pages/getPosts.php`,
                options
            );
            const newData = await response.json();
            setRecipes((prevItems) => [...prevItems, ...newData]);
            if (newData.length < 8) {
                setIsLoadMoreEnabled(false);
            }
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
            setIsLoading(false);
        } catch (error) {
            console.error('Error loading more products:', error);
        }
    };
    const breadcrumbs = {
        pages: [
            { name: t('home.name'), href: '/' },
            { name: t('corporate.recipes'), href: '#' },
        ]
    }
    console.log('recipes', recipes)
    return (
        <section className="w-full ">
            <div className="container px-6 py-10 mx-auto">
                <div className="container section_title">
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-5" />
                    <h1 className="font-bold text-green-100 sm:text-4xl">{t('corporate.recipes')} </h1>
                </div>
                <div className="list">
                    <div className="pt-10">
                        <div className="container">
                            {isLoadingPage ? (
                                <div className="flex flex-wrap list md:-mx-3 gap-y-6">
                                    <RecipeWidgetLoader />
                                    <RecipeWidgetLoader />
                                    <RecipeWidgetLoader />
                                    <RecipeWidgetLoader />
                                </div>
                            ) : (
                                <>
                                    <div className="relative flex flex-wrap list md:-mx-3 gap-y-6">
                                        {isLoading ? (
                                            <div className="absolute inset-0 z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75">
                                                <Loader />
                                            </div>
                                        ) : ('')}
                                        {recipes && recipes.map((recipe: any, index: any) => (
                                            <RecipeWidget recipe={recipe} key={index} />
                                        ))}
                                    </div>
                                    {isLoadMoreEnabled &&
                                        <div className="flex items-center justify-center mt-10 loadmore">

                                            <button onClick={handleLoadMore} date-num={pageNumber} type="button" className="inline-flex items-center justify-center px-10 py-4 mr-2 text-sm font-medium text-center text-white bg-green-200 cursor-pointer whitespace-nowrap rounded-100 w-fit hover:bg-green-400 ">
                                                {!isLoading ? (
                                                    t('load_more')
                                                ) : (
                                                    <>
                                                        <Loader extraclass={'w-4 h-4 mr-2'} />
                                                        {t('loading')}...
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    }
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}