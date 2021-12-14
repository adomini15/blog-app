// router
import { RouteComponentProps } from 'react-router'
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton, IonBadge, IonSpinner, IonItemDivider
} from '@ionic/react';
import './PostsPage.css';
import {usePosts} from "../hooks/usePosts";
import {useEffect} from "react";
import {PostCard} from "../components/PostCard";

const PostsPage: React.FC<RouteComponentProps> = ({ match, location, history }) => {
  const {posts, loading, pages, setSelectedPage, selectedPage } = usePosts();
  const queryParams = new URLSearchParams(location.search);


  useEffect(() => {
      setSelectedPage(+queryParams.get('page')!)
  }, [location])

  const generatePagination = () => {
      const navButtons = [];

      for (let i:number = 1; i <= pages; i++) {
        navButtons.push(<IonButton key={i} fill="clear" disabled={selectedPage == i} onClick={() => {
            history.push({
                search: `?page=${i}`
            })
        }}>{i}</IonButton>)
      }

      return navButtons;
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Posts { loading ? <IonSpinner name="dots"></IonSpinner>  : <IonBadge>{posts?.length}</IonBadge>}</IonTitle>
            <IonItemDivider></IonItemDivider>
            <IonToolbar className="ion-text-center">
                { generatePagination() }
            </IonToolbar>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          {
              loading || !posts ||
              posts.map((post: any) => (
                  <PostCard key={post.id} post={post} match={match} history={history} />
              ))
          }
      </IonContent>
    </IonPage>
  );
};

export default PostsPage;
