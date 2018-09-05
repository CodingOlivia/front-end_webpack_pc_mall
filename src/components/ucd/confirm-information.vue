<template>
    <q-modal v-model="opened"  content-classes="model-inner"  :content-css="{width: '800px', height: '80vh',overflow:'hidden'}">
        <div class="model-title">
           CONFIRM YOUR INFORMATION
           <span class="model-close" @click="opened=false"></span>
        </div>
        <div class="confirm-wrap">
            <div class="panel">
                <div class="panel-title">
                    Customer Information
                </div>
                <div class="panel-con">
                    <div class="row p-vertical-x--small">
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>Name</label>
                             <div class="field-detail">Maria Ludwig Michael</div>
                          </div>
                      </div>
                      <div class="col-8">
                          <div class="field-view">
                             <label><em>*</em>Address</label>
                             <div class="field-detail">No.17.Baita.Dis,,,hello</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>City</label>
                             <div class="field-detail">Houston</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>State</label>
                             <div class="field-detail">770011</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>ZIP Code</label>
                             <div class="field-detail">9009874321</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Contact Number</label>
                             <div class="field-detail">34125789546</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Birthday</label>
                             <div class="field-detail">1986-10-10</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Email</label>
                             <div class="field-detail">2154684554@gmail.com</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>RFC</label>
                             <div class="field-detail">58459875</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Electronic Invoice</label>
                             <div class="field-detail">Y</div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-title">
                    Offering Information
                </div>
                <div class="panel-con p-vertical-x--small">
                    <div class="row">
                      <div class="col-4">
                          <div class="field-view">
                             <label><em>*</em>Offering name</label>
                             <div class="field-detail">Huawei P9</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Handset monthly payment</label>
                             <div class="field-detail">$20/mo.</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Contract Period</label>
                             <div class="field-detail">12 Month</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Monthly Payment per PlanState</label>
                             <div class="field-detail">$10/mo.</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Handset Brand and model</label>
                             <div class="field-detail">C_P_PATTERN</div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="field-view">
                             <label>Guarantee Deposit</label>
                             <div class="field-detail">$1300</div>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="field-view">
                             <label>Offering description</label>
                             <div class="field-detail">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsanet viverra justo commodo.
                             </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-title">
                    Contract Information
                </div>
                <div class="panel-con p-around--small">
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">01</span>
                        </div>
                        <div class="col">
                            El presente Aviso Legal (en adelante, el "Aviso Legal") establece los Términos y Condiciones respecto al uso de las páginas de Internet, (las "Páginas) que MOVISTAR pone a disposición de usted.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">02</span>
                        </div>
                        <div class="col">
                            Las publicaciones digitales de MOVISTAR tienen por objeto facilitar a sus Clientes y al público en general, el acceso a los servicios y productos MOVISTAR, así como a la información relativa a dichos servicios, productos, equipos, tarifas, promociones, y cualquier otra información relacionada (En adelante los "Servicios y Productos").
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">03</span>
                        </div>
                        <div class="col">
                            La utilización de las páginas le atribuye a Ud. la condición de usuario de las Páginas (en adelante, el "Usuario") e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal en la versión publicada por MOVISTAR en el momento mismo en que el usuario acceda a las páginas. En consecuencia, el usuario debe leer el presente Aviso Legal en cada una de las ocasiones en que utilice las páginas, ya que puede sufrir modificaciones.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">04</span>
                        </div>
                        <div class="col">
                            La utilización de las páginas se encuentra sometida, además de este Aviso Legal, a todos los avisos, reglamentos de uso e instrucciones, que sean puestos en conocimiento del Usuario por MOVISTAR a través de las páginas.<br/>
                            El uso de ciertos Servicios y Productos ofrecidos a los Usuarios a través de las páginas puede estar sometido a condiciones particulares específicas (en adelante, las "Condiciones Particulares") que, según sea el caso, pueden sustituir, completar y/o modificar el presente Aviso Legal. Por lo tanto, previa a la utilización de dichos Servicios y Productos, el Usuario deberá leer las correspondientes Condiciones Particulares de que se trate. Otros Servicios y Productos contenidos en las páginas pueden encontrarse sujetos a la firma por escrito de un contrato de servicios (en adelante el "Contrato de Servicios") por parte del Usuario, así como a la aprobación correspondiente por parte de MOVISTAR.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">05</span>
                        </div>
                        <div class="col">
                            MOVISTAR se reserva el derecho a modificar el Aviso Legal en cualquier tiempo y sin previa notificación. Dichas modificaciones serán efectivas a partir del momento en que queden disponibles al público en las páginas. El usuario se considera enterado y obligado por los cambios al Aviso Legal desde el momento en que ingrese a las páginas. El uso o acceso a las páginas por parte del usuario constituirá la aceptación y acuerdo a los cambios del Aviso Legal.<br/>
                            De igual manera, MOVISTAR se reserva la facultad de efectuar, en cualquier momento, modificaciones en la información contenida en sus publicaciones digitales.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">06</span>
                        </div>
                        <div class="col">
                            MOVISTAR procurará que la información contenida en sus páginas sea correcta y esté actualizada al momento de ser incluida en las mismas. Sin embargo, es posible que existan errores o imprecisiones involuntarias.<br/>
                            MOVISTAR no se responsabilizará por errores u omisiones contenidas en sus páginas, ni se compromete a la actualización inmediata de la información contenida en sus publicaciones digitales.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">07</span>
                        </div>
                        <div class="col">
                            MOVISTAR podrá en cualquier momento negar, suspender o dar por terminado el acceso o el uso del usuario a las páginas, a cualquier Servicio y Producto, o cualquier parte de los mismos, a sola discreción de MOVISTAR, sin necesidad de previo aviso, sin limitación alguna, y por cualquier razón.<br/>
                            Por lo anterior, MOVISTAR no garantiza la utilidad, disponibilidad y continuidad del funcionamiento de las páginas así como de los Servicios y Productos para la realización de alguna actividad en específico, o su infalibilidad.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">08</span>
                        </div>
                        <div class="col">
                            Para conveniencia del Usuario, las páginas pueden proporcionar enlaces ("Links") a otros sitios o páginas de Internet de terceros, cuyo contenido o información no es revisado por MOVISTAR. Salvo cuando se establezca expresamente lo contrario, cualquier página o sitio enlazado con nuestras páginas es independiente de MOVISTAR, por lo que MOVISTAR no tiene control sobre tales productos, servicios, materiales o cualquier otra información contenida en o disponible a través de las Páginas o sitios de dichos terceros, ni se entenderá que MOVISTAR recomienda dichos productos o servicios de terceros que tengan un Link a nuestras Páginas. El acceso a cualquier página o sitio enlazado a nuestras páginas es bajo riesgo del usuario.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">09</span>
                        </div>
                        <div class="col">
                            Algunos Servicios y Productos puestos a disposición del Usuario a través de las páginas podrán requerir de claves o contraseñas ("Passwords"), a fin de verificar la identidad del usuario. El usuario está de acuerdo en que cualquier operación correctamente identificada con dichos Passwords será consideradas como válidamente realizadas por el usuario. Por lo anterior, el usuario será el único responsable de mantener la confidencialidad de dichos Passwords, sin importar si éstos fueron proporcionados por MOVISTAR o seleccionados por el usuario directamente.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">10</span>
                        </div>
                        <div class="col">
                            MOVISTAR es titular de todos los derechos sobre el software de las publicaciones digitales, así como de los derechos de propiedad industrial e intelectual referidos a los contenidos que en ellas se incluyan, a excepción de los derechos sobre productos y servicios que no son propiedad de MOVISTAR, cuyas marcas están registradas a favor de sus respectivos titulares, y como tal son reconocidas por MOVISTAR. Ningún material de las publicaciones digitales podrá ser reproducido, copiado modificado, distribuido, transmitido, vendido, utilizado o publicado por el usuario sin el previo consentimiento por escrito de MOVISTAR.
                            <br/>Todas las marcas de terceros registradas por sus respectivos propietarios que aparecieran en las páginas serán solo a efectos de publicidad y de recopilación de información. Sus propietarios pueden solicitar la modificación o eliminación de la información que les concierna. Por otro lado, la aparición de estas terceras marcas no implica necesariamente la recomendación de las mismas.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">11</span>
                        </div>
                        <div class="col">
                            MOVISTAR respetará escrupulosamente la confidencialidad de los datos de carácter personal aportados por los visitantes a las publicaciones digitales, mediante la observancia de su Aviso de Privacidad y de la normatividad aplicable vigente, de tal manera que MOVISTAR no entregará información personal del usuario a terceros, a menos que sea requerido para entregar un producto o prestar un servicio solicitado por el usuario. Ver Aviso de Privacidad.
                            <br/>No obstante lo señalado anteriormente, y dada la naturaleza de Internet, MOVISTAR no garantiza que todo uso de las Páginas o Servicios y Productos proporcionados a través de las mismas se encuentre libre de riesgo, por lo que MOVISTAR no tendrá responsabilidad alguna, incluyendo los daños, perjuicios o cualquier otra que pudiera ser ocasionada por el mal uso de terceros de la información generada, recibida, transmitida, o archivada en las páginas.

                        </div>
                     </div>
                      <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">12</span>
                        </div>
                        <div class="col">
                            Cualquier información enviada por los usuarios y que sea recibida en las páginas, tal como comentarios, sugerencias o ideas, se considerará cedida a MOVISTAR a título gratuito, y el usuario que la envíe acepta implícitamente que no tiene carácter de confidencial. Le sugerimos que NO ENVÍE información que no pueda ser tratada de esta forma. MOVISTAR tendrá el derecho de utilizar cualquier información enviada para los fines que juzgue convenientes.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">13</span>
                        </div>
                        <div class="col">
                            Queda terminantemente prohibido el mal uso y el uso no autorizado de las páginas, incluyendo sin limitar, el acceso no autorizado a los sistemas de MOVISTAR, el mal uso de claves o contraseñas ("Passwords"), o de cualquier información contenida en las Páginas. MOVISTAR se reserva el derecho de suspender o negar el acceso a sus páginas a las personas que hagan un mal uso de la información o de los Servicios y Productos contenidos en las mismas; sin perjuicio del derecho de MOVISTAR del ejercicio de las acciones civiles, administrativas o penales a que hubiere lugar, de conformidad con las leyes de la materia.
                            <br/>El Usuario acepta sacar en paz y a salvo a MOVISTAR, así como indemnizarle por cualquier responsabilidad, costo o gasto que se le impute por el uso por parte del usuario de las páginas o los Servicios y Productos para cualquier fin prohibido o ilegal, o la violación de las reglas de estas Páginas, cualquier Contrato de Servicios, cualquier derecho de terceros, incluyendo de manera enunciativa, mas no limitativa, los derechos de autor, de propiedad industrial, o de cualquier ley, reglamento o código federal, estatal o municipal aplicable. Dichas obligaciones continuarán aún después de la terminación de este Aviso Legal, Condiciones Particulares o Contrato de Servicios.
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small">14</span>
                        </div>
                        <div class="col">
                            Además de lo señalado en este Aviso Legal, MOVISTAR no proporciona garantías de ningún tipo respecto a:
                            <div class="color-week  m-top--small">
                                 <div class="row m-bottom--small">
                                     <div class="col-auto "><span class="p-right--small"> (1) </span></div>
                                     <div class="col">La información propia o de terceros contenida en las páginas, incluyendo los Links y otros accesorios.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (2) </span></div>
                                     <div class="col">La disponibilidad y funcionamiento, dentro y fuera de la República Mexicana, de los materiales, Servicios y Productos contenidos en las páginas, a pesar de que se haga referencia de los mismos en las páginas. Cualquier usuario que opte por acceder a las páginas desde otras ubicaciones lo hace bajo su exclusiva responsabilidad del cumplimiento de las leyes locales.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (3) </span></div>
                                     <div class="col">Sobre la precisión o confiabilidad de cualquier información, contenido o publicidad o materiales contenidos, enlazados, grabados o accesados a través de las páginas, con excepción a lo que se exprese en contrario en cualquier Contrato de Servicios, ni la calidad de cualquier producto, información u otros materiales obtenidos por el usuario como resultado de cualquier publicidad, información u oferta contenidos en las páginas.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (4) </span></div>
                                     <div class="col">Sobre página o sitio alguno a que el usuario tenga acceso a través de las páginas.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (5) </span></div>
                                     <div class="col">Sobre la privacidad y seguridad de la utilización de las páginas y de los Servicios y Productos, ni que terceros no autorizados no lleguen a tener conocimiento del uso que los usuarios hagan de las páginas y de los Servicios y Productos.</div>
                                 </div>
                            </div>
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                        <div class="col-auto">
                            <span class="p-right--small"> 15</span>
                        </div>
                        <div class="col">
                            MOVISTAR excluye cualquier responsabilidad civil, penal, administrativa, o por los daños y perjuicios directos o indirectos, o cualquier otro causado o derivado de:
                            <div class="color-week m-top--small">
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (1) </span></div>
                                     <div class="col">La presencia de virus u otros elementos lesivos en los Servicios y Productos prestados a través de las páginas de MOVISTAR o por terceros que tengan un Link con las Páginas que puedan producir alteraciones en el sistema informático o documentos electrónicos de los usuarios.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (2) </span></div>
                                     <div class="col">Errores u omisiones contenidas en las páginas, o uso de la información contenida en las mismas. Cualquier decisión basada en la información contenida en estas páginas será responsabilidad del visitante.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (3) </span></div>
                                     <div class="col">El uso y la información disponible en cualquier link a las páginas de MOVISTAR.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (4) </span></div>
                                     <div class="col">El uso y la información disponible en cualquier link a las páginas de MOVISTAR.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (5) </span></div>
                                     <div class="col">El conocimiento que puedan tener terceros no autorizados de la clase, condiciones, características y circunstancias del uso que los Usuarios hacen de las páginas y de los Servicios y Productos.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (6) </span></div>
                                     <div class="col">El acceso a las páginas o el uso de información o aplicaciones en ella contenidas que generen daños en el software o hardware del usuario.</div>
                                 </div>
                                 <div class="row m-bottom--small">
                                     <div class="col-auto"><span class="p-right--small"> (7) </span></div>
                                     <div class="col">El mal uso de terceros de la información generada, recibida, transmitida, o archivada en las páginas.</div>
                                 </div>
                                 <div class="row ">
                                     <div class="col-auto"><span class="p-right--small"> (8) </span></div>
                                     <div class="col">La falta de disponibilidad o de continuidad del funcionamiento de las páginas y de los Servicios y Productos, la no-utilidad que los usuarios hubieren podido atribuir a las páginas y a los Servicios, y a la falibilidad de las páginas y de los Servicios.</div>
                                 </div>
                            </div>
                        </div>
                     </div>
                     <div class="row m-bottom--small">
                         <div class="col-auto"> <span class="p-right--small">16</span></div>
                         <div class="col">
                             El correo electrónico no será considerado como medio válido a los efectos de presentación de reclamaciones por parte de los usuarios. Para ello deberán llamar desde su celular Movistar al *611 ó desde un teléfono fijo al 01 800 88 88 366 que indicará en cada caso los pasos a seguir.
                         </div>
                     </div>
                </div>
            </div>

        </div>
        <div class="model-footer">
            <div class="model-footer-inner">
                Please read the contract information before you accept!
               <div class="model-footer-action">
                   <span class="btn negative m-right--small">NOT ACCEPT</span>
                   <span class="btn ">ACCEPT</span>
               </div>
            </div>
        </div>
    </q-modal>
 
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QField,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon,
  QItemTile,
  QToggle,
  QModal
} from 'quasar'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
    QToggle,
    QModal
  },
  data () {
    return {
      opened: true,
      isAgree: false
    }
  },
  methods: {
    
  },
  mounted () {
    
  },
  watch: {
  }
}
</script>

