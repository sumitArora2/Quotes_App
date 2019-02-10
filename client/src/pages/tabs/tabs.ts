
import { Component } from '@angular/core';
import { FavoritesPage } from './../favorites/favorites';
import { LibraryPage } from './../library/library';
@Component({
    selector:'page-tabs',
    template:`
    <ion-tabs selectedIndex="1">
    <ion-tab [root]="favpage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libpage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage{
favpage=FavoritesPage;
libpage=LibraryPage;
}