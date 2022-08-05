import { Fragment } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
                )
            }
        </Fragment>
    );
};

export default CategoriesPreview;