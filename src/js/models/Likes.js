export default class Likes{
    constructor()
    {
        this.likes=[];
    }
    addLike(id,title,author,img){
        const like={id,title,author,img}
            this.likes.push(like)
            return like;
    }
    deleteLike(id){
        const index=this.likes.findIndex(el=>el.id===id);
        this.likes.splice(index,1);

    }
    isLiked(id){
       //using find index, if index is -1, it means we cant findIndex of an item that we passed in and will turn out ot be false
       return this.likes.findIndex(el=>el.id===id)!==-1; 
    }

    getNumOflikes(){
        return this.likes.length
    }
}