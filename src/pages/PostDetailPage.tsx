import {IonButtons, IonContent, IonHeader, IonImg, IonNote, IonPage, IonBackButton, IonTitle, IonToolbar} from "@ionic/react";
import {RouteComponentProps} from "react-router";
import {useSelector} from "react-redux";
import {Post} from "../types/Post";
import {Redirect} from "react-router-dom";
import moment from "moment";
import 'moment/locale/es'


moment.locale('es')

const PostDetailPage:React.FC<RouteComponentProps> = ({ match}) => {
    const {id} = match.params as { id: number};
    const post: Post = useSelector((state: any) => state.posts?.filter((post: Post) => post.id == id)[0]) as Post;

    console.log(post);

    return (
        <IonPage>
            {!post ? <Redirect to="/posts"/> :
                <>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="/">
                                </IonBackButton>
                            </IonButtons>
                            <IonTitle><div dangerouslySetInnerHTML={{__html: post.title}}/></IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen className="ion-padding">
                        <IonImg src={post.thumbnailURL} className="ion-margin-vertical" />
                        <IonNote>
                            <b>Última actualización: </b> {moment(post.updatedAt).fromNow()}
                        </IonNote>
                        <IonNote color="dark">
                            <div className="ion-text-justify" dangerouslySetInnerHTML={{__html: post.content}}/>
                        </IonNote>
                    </IonContent>
                </>
            }
        </IonPage>
    )
}

export default PostDetailPage;