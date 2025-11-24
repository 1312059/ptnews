import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoint";
import NewsCardList from "../components/NewsCardList"
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {

    const politicsNewsEndpoint = getNewsCategoriesEndpoint("politics", 1,8);
    const environmentNewsEndpoint = getNewsCategoriesEndpoint("environment", 1, 8);
    const cultureNewsEndpoint = getNewsCategoriesEndpoint("culture", 1, 16);
    const politicsData = useFetch(politicsNewsEndpoint)
    const environmentData = useFetch(environmentNewsEndpoint)
    const cultureData = useFetch(cultureNewsEndpoint)

    const adaptedPoliticsData = getNewsList(politicsData)
    const adaptedEnvironmentData = getNewsList(environmentData)
    const adaptedCultureData = getNewsList(cultureData)
    
    
    return (
        <Layout>
            <section className="Politics">
                <Container>
                    <h1 className="mb-5 pt-3">Politics</h1>
                    <NewsCardList newsList={adaptedPoliticsData} />


                    <p>
                        See all your latest politics news in the {" "} <Link to="/category/Politics" className="text-secondary"> Politics </Link> section

                    </p>
                </Container>
            </section>

            <section className="Environment">
                <Container>
                    <h1 className="mb-5 pt-3">Environment</h1>
                    <NewsCardList newsList={adaptedEnvironmentData} />
                    <p>
                        See all breaking news regarding the environment in the {" "} <Link to="/category/Environment" className="text-secondary"> Environment 
                        </Link>
                    </p>
                </Container>
            </section>

            <section className="Foryou">
                <Container>
                    <h1 className="mb-5 pt-3">For you</h1>
                    <NewsCardList newsList={adaptedCultureData}  />
                </Container>
            </section>

           <section className="Favorites">
                <Container>
                    <h1 className="mb-5 pt-3">Favorites</h1>
                   <p>
           Want to save an article that peaked your interest?
          </p>
          <p>
            Next to each article you will find a button with which you can save your favorite texts for later.
          </p>
          <p className="pb-3">
            Visit{" "}
            <Link to="/favorites" className="text-secondary">
              Favorites
            </Link>{" "}
            to see your saved articles
          </p>
                </Container>
            </section>
        </Layout>
    );
}



export default Home;