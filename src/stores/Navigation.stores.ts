import { makeAutoObservable } from "mobx";

class NavigationStore {
  private _currentNav: string;

  constructor() {
    makeAutoObservable(this);

    this._currentNav = "홈";
  }

  public get currentNav(): string {
    return this._currentNav;
  }
  public set currentNav(value: string) {
    this._currentNav = value;
  }
}

export const navigationStore = new NavigationStore();
