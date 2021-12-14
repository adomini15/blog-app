import {Post} from "../types/Post";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
} from "@ionic/react";
import moment from "moment";
import 'moment/locale/es'

moment.locale('es')

export const PostCard: React.FC<{ post: Post, match: any, history: any}> = ({post , match, history}) => {

    const go = (url: string) => {
        history.push(url)
    }

    return <>
        <IonCard key={post.id}>

            <IonImg src={post.thumbnailURL}  />
            <IonCardContent>

                <IonCardTitle >
                    <div dangerouslySetInnerHTML={{__html: post.title}}/>
                </IonCardTitle>
                <IonCardSubtitle>
                    <b>Última actualización: </b>{moment(post.updatedAt).fromNow()}
                </IonCardSubtitle>


                <div  className="ion-margin-top" dangerouslySetInnerHTML={{__html: post.excerpt }} />

            </IonCardContent>

            <IonButton expand="full" color="success" fill="clear" onClick={() => go(`${match.url}/${post.id}`)} >
                leer más
            </IonButton>

        </IonCard>
    </>
}