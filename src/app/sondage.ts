import {Utilisateur} from './utilisateur';
import {Reunion} from './reunion';
import {Reponse} from './reponse';

export class Sondage {

  private id: Number;
  private dtype: String;
  private lienWeb: string;
  private utilisateurs: Utilisateur[];
  private reunion: Reunion;
  private reponses: Reponse[];
  private datesReu: String[];
  private lieux: String[];

  constructor(id: Number, lienWeb: string, utilisateurs: Utilisateur[], reunion: Reunion, reponses: Reponse[], dates: String[], lieux: String[]) {
    this.id = id;
    this.lienWeb = lienWeb;
    this.utilisateurs = utilisateurs;
    this.reunion = reunion;
    this.reponses = reponses;
    this.datesReu = dates;
    this.lieux = lieux;
  }

  get Id(): Number {
    return this.id;
  }

  set Id(value: Number) {
    this.id = value;
  }

  get DType(): String {
    return this.dtype;
  }

  set DType(value: String) {
    this.dtype = value;
  }

  get LienWeb(): string {
    return this.lienWeb;
  }

  set LienWeb(value: string) {
    this.lienWeb = value;
  }

  get Utilisateurs(): Utilisateur[] {
    return this.utilisateurs;
  }

  set Utilisateurs(value: Utilisateur[]) {
    this.utilisateurs = value;
  }

  get Reunion(): Reunion {
    return this.reunion;
  }

  set Reunion(value: Reunion) {
    this.reunion = value;
  }

  get Reponses(): Reponse[] {
    return this.reponses;
  }

  set Reponses(value: Reponse[]) {
    this.reponses = value;
  }

  get DatesReu(): String[] {
    return this.datesReu;
  }

  set DatesReu(value: String[]) {
    this.datesReu = value;
  }

  get Lieux(): String[] {
    return this.lieux;
  }

  set Lieux(value: String[]) {
    this.lieux = value;
  }
}
