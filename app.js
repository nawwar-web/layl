function formatterNombreDeuxCaracteres(nombre) {
    if (nombre < 10) {
        return "0" + nombre.toString();
    } else {
        return nombre.toString(); 
    }
}

function valider() {

    if(document.form_calcul.maghrib_h.value != "" && document.form_calcul.fajr_h.value != "") {


      let maghrib = document.getElementById("maghrib_h")
      let fajr = document.getElementById("fajr_h")

      let heure_mag = maghrib.value
      let heure_fajr = fajr.value
      
      console.log(heure_mag)
      console.log(heure_fajr)



      let part_mag = heure_mag.split(":");
      let min_mag = Number(part_mag[0]*60+Number(part_mag[1]));
      console.log("Nb ninute magreb  : "+min_mag+" minutes")

      let part_fajr = heure_fajr.split(":");
      let min_fajr = Number(part_fajr[0]*60+Number(part_fajr[1]));
      console.log("Nb ninute fajr  : "+min_fajr+" minutes")

      let laps = (min_mag-min_fajr);
      console.log("Temps entre magrib et fajr : "+laps+" MINUTES")

      console.log("")

      if(min_fajr-min_mag > 0){

        laps = (min_fajr-min_mag)/60
        laps_min = min_fajr - min_mag;
        console.log("Maintenant le VRAI Temps entre magrib et fajr : "+laps+" heure,minutes")
        console.log("Maintenant le VRAI Temps entre magrib et fajr : "+laps_min+" juste minutes")
        let un_tiers = laps_min / 3;
        console.log("Un tiers de la nuit : "+un_tiers+" minutes")

        derniers_tiers_min = min_fajr - un_tiers;
        console.log("Derniers tiers en minute : "+derniers_tiers_min+" minutes")

       derniers_tiers_heure = derniers_tiers_min/60;
       derniers_tiers_heure = derniers_tiers_heure.toString();
       derniers_tiers_heure = derniers_tiers_heure+".0"
       let part_dtm = derniers_tiers_heure.split(".");
       let dtm_h = Number(part_dtm[0]);
       let dtm_m = Number("0."+part_dtm[1])*60;

       dtm_m = Math.ceil(dtm_m)
       dtm_m = formatterNombreDeuxCaracteres(dtm_m).toString()
       dtm_h = formatterNombreDeuxCaracteres(dtm_h).toString()

       console.log("HEURE : "+dtm_h);
       console.log("MINUTE : "+dtm_m)

       /* integration à la page */

       let h_resultat = document.querySelector("#resultat_heure");
       h_resultat.innerHTML= dtm_h+"H"+dtm_m

       let p_resultat = document.querySelector(".resultat");
       p_resultat.style.display = "block";


      }else{

      let laps = (min_mag-min_fajr)/60-24;


      laps = laps.toString();
      laps = laps+".0";
      let part_laps = laps.split(".");
      console.log(-part_laps[0])
      let laps_h = Number(-part_laps[0]*60);
      let laps_m = Number("0."+part_laps[1])*60;
      let laps_min = laps_h+laps_m
      console.log("Nb ninute entre maghreb et fajr  : "+laps_min+" minutes")


      let un_tiers = laps_min / 3;
      console.log("Un tiers de la nuit : "+un_tiers+" minutes")
      
       let derniers_tiers_min = min_fajr-un_tiers;
       console.log("Le dennier tiers en minute : "+derniers_tiers_min);

      derniers_tiers_min = derniers_tiers_min/60
      console.log("Le dennier tiers en heure.minute : "+derniers_tiers_min);

      derniers_tiers_min = derniers_tiers_min.toString()
      derniers_tiers_min = derniers_tiers_min+".0";
      let part_dtm = derniers_tiers_min.split(".")
      let dtm_h =Number(part_dtm[0]);
      let dtm_m = Number("0."+part_dtm[1])*60;
      
      dtm_m = Math.ceil(dtm_m)
      dtm_m = formatterNombreDeuxCaracteres(dtm_m).toString()
      dtm_h = formatterNombreDeuxCaracteres(dtm_h).toString()
      

      console.log("HEURE : "+dtm_h);
      console.log("MINUTE : "+dtm_m)

     /* integration à la page */

     let h_resultat = document.querySelector("#resultat_heure");
     h_resultat.innerHTML= dtm_h+"H"+dtm_m

     let p_resultat = document.querySelector(".resultat");
     p_resultat.style.display = "block";

      }









    }
    else {
      alert("Veuillez compléter les deux heures");
    }
  }
