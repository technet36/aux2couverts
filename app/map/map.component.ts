import {Component} from "@angular/core";

@Component({
    selector: 'my-map',
    templateUrl: "map.component.html"
})
export class MapComponent {
    // google maps zoom level
    zoom: number = 8;

    markers: marker[] = [ ];
    // initial center position for the map
    lat: number = 53.347692;
    lng: number = -6.269151;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
      /*  this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        });*/
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

}
// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}