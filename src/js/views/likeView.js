import { elements } from './base';
import{limitRecipeTitle} from './searchView'

export const toggleLikeBtn=isLiked=>{
    //terniary operator for if and else. note that "icon-heart" is liked and "icon-heart-outline" is the opposite.
    const iconString=isLiked? 'icon-heart':'icon-heart-outlined'
    //using set attribute, we change the href to img heart icon, giving it either 'icon-heart':'icon-heart-outline'
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`);
    //icons.svg#icon-heart-outlined
}

export const toggleLikeMenu=numOfLikes=>{
    //to change the visibiliuty property of the like menu icon we use .stlye and visibility
    //again terniary operator for if number of likes is >0 show heart else dont show heart
    elements.likesMenu.style.visibility=numOfLikes>0 ?"visible":"hidden";
};

export const renderLike =like=>{
    const markup=`
    <li>
      <a class="likes__link" href="#${like.id}">
          <figure class="likes__fig">
              <img src="${like.img}" alt="${like.title}">
          </figure>
          <div class="likes__data">
              <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
              <p class="likes__author">T${like.author}</p>
          </div>
      </a>
    </li>
    `;
    elements.likesList.insertAdjacentHTML("beforeend",markup);
}

export const deleteLike=id=>{
    const el=document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if (el)el.parentElement.removeChild(el);
}

