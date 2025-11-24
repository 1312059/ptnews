import { useContext } from "react";
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import { FavoritesContext } from "../store/favorites/context";
import NewsCardList from "../components/NewsCardList";

function Favorites() {
    const { favoritesState } = useContext(FavoritesContext)
    const { products } = favoritesState;
    return (
        <Layout>
            <Container>
                <h1 className="mb-5 pt-3">Saved Articles</h1>
                {products.length === 0 ? (
                      <p>You haven't saved any article yet</p>
                ) : (
                    <NewsCardList newsList={products} />
                )}
          </Container>
        </Layout>
    );
}

export default Favorites;