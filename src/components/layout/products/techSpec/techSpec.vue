<template>
  <div class="techSpec-box">
    <div class="column techSpecbox justify-center">
      <div class="item row float-left" v-for="finish in Finish">
        <span>{{finish.title}}</span>
        <div class="row" >
          <div v-for="productType in finish.productType" class="column" style="margin: 0 140px 0 0;">
            <div>
              <img class="responsive" :src=productType.src />
            </div>
            <span style="text-align: center; margin-top:40px">{{productType.color}}</span>
          </div>
        </div>
      </div>
      <div class="item row" v-for="capacity in Capacity">
        <span>{{capacity.title}}</span>
        <div class="column lineHeight34">
          <span class="Model" style="display: block;" v-for="gb in capacity.GB">{{gb.GBNUM}}</span>
        </div>
      </div>
      <div class="item row" v-for="size in Size">
        <span>{{size.title}}</span>
        <div class="row">
          <div>
            <img class="responsive" :src=size.src />
          </div>
          <div class="column lineHeight34" style="margin-left: 115px;">
            <span v-for="sizeDiscrip in size.sizeDiscrip"><span class="Model">{{sizeDiscrip.discripName}}:</span> {{sizeDiscrip.discripNum}}</span>
          </div>
        </div>
      </div>
      <div class="item row" v-for="display in Display">
        <span>{{display.title}}</span>
        <div class="row">
          <div>
            <img class="responsive" :src=display.src />
          </div>
          <div class="column">
            <div class="column lineHeight34">
              <span v-for="displayDiscrip in display.displayDiscrip">{{displayDiscrip.displayContent}}</span>
            </div>
            <span style="width:30vw;color: $font-color-5; font-size: 12px;">{{display.discripLongth}}</span>
          </div>
          
        </div>
      </div>
      <div class="item row">
        <span>{{Splash.title}}</span>
        <div>{{Splash.discrip}}</div>
      </div>
      <div class="item row" v-for="camera in Camera">
        <span>{{camera.title}}</span>
        <div class="column lineHeight34">
          <span v-for="cameraDiscrip in camera.cameraDiscrip">{{cameraDiscrip.cameraContent}}</span>
        </div>
      </div>
      <div class="item row">
        <span>{{Carriers.title}}</span>
        <img class="responsive" :src=Carriers.src />
      </div>
      <div class="item row" style="border: none;" v-for="cellular in Cellular">
        <span>{{cellular.title}}</span>
        <div class="column">
          <div class="last-box">
            <div class="last-box-left">
              <span class="Model">{{cellular.discrip1}}</span>
            </div>
            <div class="column lineHeight34">
              <span v-for="cellularContent1 in cellular.cellularContent1">{{cellularContent1.cellularcontent1}}</span>
            </div>
          </div>
          <div class="last-box">
            <div class="last-box-left">
              <span class="Model">{{cellular.discrip2}}</span>
              <span style="width: 136px; display: block;font-size: 12px;">{{cellular.discrip3}}</span>
            </div>
            <div class="column lineHeight34">
              <span v-for="cellularContent2 in cellular.cellularContent2">{{cellularContent2.cellularcontent2}}</span>
            </div>
          </div>
          <div class="last-box">
            <div class="last-box-left">
              <span class="Model">{{cellular.discrip4}}</span>
            </div>
            <div class="column lineHeight34">
              <span v-for="cellularContent3 in cellular.cellularContent3">{{cellularContent3.cellularcontent3}}</span>
            </div>
          </div>



         <!--  <div>
            <span class="Model">{{cellular.discrip1}}</span>
            <div style="margin: 196px 112px 70px 0;">
              <span class="Model" style="line-height: 24px;">{{cellular.discrip2}}</span>
              <span style="width: 140px; display: block;font-size: 12px;">{{cellular.discrip3}}</span>
            </div>
            <span class="Model">{{cellular.discrip4}}</span>
          </div>
          <div class="column">
            <div class="column lineHeight34">
              <span v-for="cellularContent1 in cellular.cellularContent1">{{cellularContent1.cellularcontent1}}</span>
            </div>
            <div class="column lineHeight34" style="margin: 36px 0;">
              <span v-for="cellularContent2 in cellular.cellularContent2">{{cellularContent2.cellularcontent2}}</span>
            </div>
            <div class="column lineHeight34">
              <span v-for="cellularContent3 in cellular.cellularContent3">{{cellularContent3.cellularcontent3}}</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      'Finish': [{
        'title': 'Finish',
        productType: [
          {src: 'statics/images/techspec/1.png', color: 'Space Gray'},
          {src: 'statics/images/techspec/2.png', color: 'Silver'}
        ]
      }],
      'Capacity': [{
        'title': 'Capacity',
        'GB': [
          {'GBNUM': 'GB64'},
          {'GBNUM': 'GB256'}
        ]
      }],
      'Size': [{
        'title': 'Size and Weight',
        'src': 'statics/images/techspec/3.png',
        'sizeDiscrip': [
          {'discripName': 'Height', 'discripNum': '5.65 inches (143.6 mm)'},
          {'discripName': 'Width', 'discripNum': '2.79 inches (70.9 mm)'},
          {'discripName': 'Depth', 'discripNum': '0.30 inch (7.7 mm)'},
          {'discripName': 'Weight', 'discripNum': '6.14 ounces (174 grams)'}
        ]
      }],
      'Display': [{
        'title': 'Display',
        'src': 'statics/images/techspec/4.png',
        'displayDiscrip': [
          {'displayContent': 'Super Retina HD display'},
          {'displayContent': '5.8-inch (diagonal) all-screen OLED Multi-Touch display'},
          {'displayContent': 'HDR display'},
          {'displayContent': '2436-by-1125-pixel resolution at 458 ppi'},
          {'displayContent': '1,000,000:1 contrast ratio (typical)'},
          {'displayContent': 'True Tone display'},
          {'displayContent': 'Wide color display (P3)'},
          {'displayContent': '3D Touch'},
          {'displayContent': '625 cd/m2 max brightness (typical)'},
          {'displayContent': 'Fingerprint-resistant oleophobic coating'},
          {'displayContent': 'Support for display of multiple languages and characters {simultan}ously'}
        ],
        'discripLongth': 'The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
      }],
      'Splash': {
        'title': 'Splash, Water, and Dust Resistant',
        'discrip': 'Rated IP67 under IEC standard 60529'
      },
      'Camera': [{
        'title': 'Camera',
        'cameraDiscrip': [
          {'cameraContent': '12MP wide-angle and telephoto cameras'},
          {'cameraContent': 'Wide-angle: ƒ/1.8 aperture'},
          {'cameraContent': 'Telephoto: ƒ/2.4 aperture'},
          {'cameraContent': 'Optical zoom; digital zoom up to 10x'},
          {'cameraContent': 'Portrait mode'},
          {'cameraContent': 'Portrait Lighting (beta)'},
          {'cameraContent': 'Dual optical image stabilization'},
          {'cameraContent': 'Six‑element lens'},
          {'cameraContent': 'Quad-LED True Tone flash with Slow Sync'},
          {'cameraContent': 'Panorama (up to 63MP)'},
          {'cameraContent': 'Sapphire crystal lens cover'},
          {'cameraContent': 'Backside illumination sensor'},
          {'cameraContent': 'Hybrid IR filter'},
          {'cameraContent': 'Autofocus with Focus Pixels'},
          {'cameraContent': 'Tap to focus with Focus Pixels'},
          {'cameraContent': 'Live Photos with stabilization'},
          {'cameraContent': 'Wide color capture for photos and Live Photos'},
          {'cameraContent': 'Improved local tone mapping'},
          {'cameraContent': 'Body and face detection'},
          {'cameraContent': 'Exposure control'},
          {'cameraContent': 'Noise reduction'},
          {'cameraContent': 'Auto HDR for photos'},
          {'cameraContent': 'Auto image stabilization'},
          {'cameraContent': 'Burst mode'},
          {'cameraContent': 'Timer mode'},
          {'cameraContent': 'Photo geotagging'},
          {'cameraContent': 'Image formats captured: HEIF and JPEG'}
        ]
      }],
      'Carriers': {
        'title': 'Carriers',
        'src': 'statics/images/techspec/carriers.png'
      },
      'Cellular': [{
        'title': 'Cellular and  Wireless',
        'discrip1': 'Model A1865*',
        'discrip2': 'Model A1901*',
        'discrip3': 'Model A1901 does not support CDMA networks, such as those used by Verizon and Sprint.',
        'discrip4': 'All models',
        'cellularContent1': [
          {'cellularcontent1': 'FDD-LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)'},
          {'cellularcontent1': 'TD-LTE (Bands 34, 38, 39, 40, 41)'},
          {'cellularcontent1': 'TD-SCDMA 1900 (F), 2000 (A)'},
          {'cellularcontent1': 'CDMA EV-DO Rev. A (800, 1900, 2100 MHz)'},
          {'cellularcontent1': 'UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)'},
          {'cellularcontent1': 'GSM/EDGE (850, 900, 1800, 1900 MHz)'}
        ],
        'cellularContent2': [
          {'cellularcontent2': 'FDD-LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)'},
          {'cellularcontent2': 'TD-LTE (Bands 34, 38, 39, 40, 41)'},
          {'cellularcontent2': 'UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)'},
          {'cellularcontent2': 'GSM/EDGE (850, 900, 1800, 1900 MHz)'}
        ],
        'cellularContent3': [
          {'cellularcontent3': '802.11ac Wi‑Fi with MIMO'},
          {'cellularcontent3': 'Bluetooth 5.0 wireless technology'},
          {'cellularcontent3': 'NFC with reader mode'}
        ]
      }]
    }
  }
}
</script>
