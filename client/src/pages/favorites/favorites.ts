import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Quote } from './../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from './../quote/quote';
import { SettingsService } from './../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage{
  quotes:Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private quotesService:QuotesService,private modalCtrl:ModalController,private settingService:SettingsService) {
  }
ionViewWillEnter(){
  this.quotes=this.quotesService.getFavoriteQuote();
}  
onViewQuote(quote:Quote){
const modal=this.modalCtrl.create(QuotePage,quote);
modal.present();
modal.onDidDismiss((remove:boolean)=>{
if(remove){
  this.RemoveQuote(quote);
 // this.quotes=this.quotesService.getFavoriteQuote();
  /*const position=this.quotes.findIndex((quoteEl:Quote)=>{
    return quoteEl.id==quote.id;
  })
this.quotes.splice(position,1);*/
}
});
}
RemoveQuote(quote:Quote){
  this.quotesService.removeQuoteFromFavorites(quote);
  this.quotes=this.quotesService.getFavoriteQuote();
}
getBackground(){
  return this.settingService.isAltBackground() ? 'altQuoteBackground' :'quoteBackground';
}
}
