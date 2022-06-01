import React, { useState, useEffect, useRef } from "react";

import './App.css';
import './custom.css';
import LabelStudio from '@heartexlabs/label-studio';
import '@heartexlabs/label-studio/build/static/css/main.css';

export default function App() {
  return (
    <div className="container-fluid App">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active">
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='col'>
          <h1>Layout Parser App</h1>
          <LabelStudioWrapper />
        </div>
      </div>
    </div>

  );

}

const LabelStudioWrapper = (props) => {
  // we need a reference to a DOM node here so LSF knows where to render
  const rootRef = useRef();
  // this reference will be populated when LSF initialized and can be used somewhere else
  const lsfRef = useRef();

  const [labeltry, setLabeltry] = useState();
  const [path, setPath] = useState();

  // we're running an effect on component mount and rendering LSF inside rootRef node
  useEffect(() => {
    if (typeof labeltry === "undefined") {
      setLabeltry("Passaro");
    }
    if (typeof path === "undefined") {
      setPath(
        "http://localhost:8081/GK2_page-0280.jpg"
      );
    }
    if (rootRef.current) {
      lsfRef.current = new LabelStudio(rootRef.current, {
        /* all the options according to the docs */
        config:
          `
          <View>

          <Image name="image" value="$image"/>
          <Labels name="label" toName="image">
          
         
          
          </Labels>
          
          
          <TextArea name="transcription" toName="image" editable="true" perRegion="true" maxSubmissions="2" rows="1" displayMode="region-list"/>
          
          <Rectangle name="bbox" toName="image" strokeWidth="3"/>
          </View>
    `,

        /**
         * interfaces: [
          "panel",
          "update",
          "submit",
          "controls",
          "side-column",
          "annotations:menu",
          "annotations:add-new",
          "annotations:delete",
          "predictions:menu"
        ]
         */
        interfaces: [
          "panel",
          "update",
          "submit",
          "controls",
          "side-column",
         
         ],

        user: {
          pk: 1,
          firstName: "Nelson",
          lastName: "Nunes"
        },

        task: {
          annotations: [],
          predictions: [
            {
                "result": [
                    {
                        "from_name": "bbox",
                        "id": "7223dee7-3",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 8.340016038492381,
                            "rotation": 0,
                            "width": 71.1978465679677,
                            "x": 17.900403768506056,
                            "y": 6.174819566960705
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "7223dee7-3",
                        "score": 0.44684210526315793,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 8.340016038492381,
                            "rotation": 0,
                            "text": [
                                "( २६२ )  ैल्म? । अथवा ञ्यादयः ३। ४। ५ । ६ । ७।८ एभिर्जात"
                            ],
                            "width": 71.1978465679677,
                            "x": 17.900403768506056,
                            "y": 6.174819566960705
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "5a4ba707-3",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 2.566158781074579,
                            "rotation": 0,
                            "width": 16.41991924629879,
                            "x": 24.89905787348587,
                            "y": 15.557337610264636
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "5a4ba707-3",
                        "score": -0.0075,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 2.566158781074579,
                            "rotation": 0,
                            "text": [
                                "्आ"
                            ],
                            "width": 16.41991924629879,
                            "x": 24.89905787348587,
                            "y": 15.557337610264636
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "3fd5f986-9",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 3.8492381716118684,
                            "rotation": 0,
                            "width": 67.4293405114401,
                            "x": 21.668909825033648,
                            "y": 15.637530072173215
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "3fd5f986-9",
                        "score": 0.457,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 3.8492381716118684,
                            "rotation": 0,
                            "text": [
                                "। ं ३ फलम् १ । एकाद्युत्तरैर्जाता"
                            ],
                            "width": 67.4293405114401,
                            "x": 21.668909825033648,
                            "y": 15.637530072173215
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "2244e465-0",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "width": 23.553162853297444,
                            "x": 31.22476446837147,
                            "y": 15.637530072173215
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "2244e465-0",
                        "score": 0.17714285714285713,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "text": [
                                "र रद ३ द"
                            ],
                            "width": 23.553162853297444,
                            "x": 31.22476446837147,
                            "y": 15.637530072173215
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "7a4bd03f-d",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "width": 71.73620457604306,
                            "x": 17.49663526244953,
                            "y": 21.170809943865276
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "7a4bd03f-d",
                        "score": 0.3942105263157895,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "text": [
                                "त नि १ । ३ ।  ह्ा है लम् १ । अथवेष्टानि १ । ३"
                            ],
                            "width": 71.73620457604306,
                            "x": 17.49663526244953,
                            "y": 21.170809943865276
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "6b7fb0f5-d",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "width": 72.00538358008076,
                            "x": 17.362045760430686,
                            "y": 26.623897353648758
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "6b7fb0f5-d",
                        "score": 0.179,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 4.0096230954290295,
                            "rotation": 0,
                            "text": [
                                "२। ब् कभिर्जाताः ?। ।इ।३। ११ धनर्ण"
                            ],
                            "width": 72.00538358008076,
                            "x": 17.362045760430686,
                            "y": 26.623897353648758
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "165ac086-7",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 25.902165196471532,
                            "rotation": 0,
                            "width": 65.67967698519516,
                            "x": 22.072678331090174,
                            "y": 28.46832397754611
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "165ac086-7",
                        "score": 0.4721212121212122,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 25.902165196471532,
                            "rotation": 0,
                            "text": [
                                "३ २४ ४० १० तब  इति फलम् १ ।  सूत्रम्।  १परिकल्प्यादौ रूपं  सांशं परतः परं तदेव स्यात् ।  निकटबधस्तुच्छेदा:  प्रान्त्यो यो५ङ्कः स एव तच्छेदः"
                            ],
                            "width": 65.67967698519516,
                            "x": 22.072678331090174,
                            "y": 28.46832397754611
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "a99222ec-9",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 9.943865276663994,
                            "rotation": 0,
                            "width": 68.23687752355316,
                            "x": 21.668909825033648,
                            "y": 55.81395348837209
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "a99222ec-9",
                        "score": 0.5278571428571429,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 9.943865276663994,
                            "rotation": 0,
                            "text": [
                                "उदाहरणम् ।  अंशा त्रिकादि द्विचया-  श्चतुर्षु स्थानेषु तच्छेदनकाश्च कैश्चि"
                            ],
                            "width": 68.23687752355316,
                            "x": 21.668909825033648,
                            "y": 55.81395348837209
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "31c170c0-3",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 7.137129109863673,
                            "rotation": 0,
                            "width": 2.6917900403768504,
                            "x": 17.63122476446837,
                            "y": 15.557337610264636
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "31c170c0-3",
                        "score": 0.08166666666666667,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 7.137129109863673,
                            "rotation": 0,
                            "text": [
                                "१  ं"
                            ],
                            "width": 2.6917900403768504,
                            "x": 17.63122476446837,
                            "y": 15.557337610264636
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "98f545da-4",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 3.0473135525260626,
                            "rotation": 0,
                            "width": 66.7563930013459,
                            "x": 21.399730820995963,
                            "y": 68.72493985565357
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "98f545da-4",
                        "score": 0.36615384615384616,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 3.0473135525260626,
                            "rotation": 0,
                            "text": [
                                "(१) अत्रोपपत्िः । कल्प्यन्ते अंशाः = अ२, अ?, अ?, अन"
                            ],
                            "width": 66.7563930013459,
                            "x": 21.399730820995963,
                            "y": 68.72493985565357
                        }
                    },
                    {
                        "from_name": "bbox",
                        "id": "0a49b9dc-a",
                        "to_name": "image",
                        "type": "rectangle",
                        "value": {
                            "height": 17.72253408179631,
                            "rotation": 0,
                            "width": 74.56258411843876,
                            "x": 15.746971736204577,
                            "y": 72.97514033680834
                        }
                    },
                    {
                        "from_name": "transcription",
                        "id": "0a49b9dc-a",
                        "score": 0.3544680851063831,
                        "to_name": "image",
                        "type": "textarea",
                        "value": {
                            "height": 17.72253408179631,
                            "rotation": 0,
                            "text": [
                                "कल्प्येष्टानङ्कानः इत्यादिना यदि प्रथममिध्म् =१, द्वितीया  = इ२, इ१ १४   सारन्-।। ’. १२ = अ१ + १,   अ१ =इ१ -?  इ१  आ२ + इ२,   एवमंशयोजनेन सर्वाणीष्टानि व्यक्तीभवन्ति इति । ततः ’  कल्प्येष्टानङ्कान्’ इत्यादिना हरानयनं सुगममिति ।"
                            ],
                            "width": 74.56258411843876,
                            "x": 15.746971736204577,
                            "y": 72.97514033680834
                        }
                    }
                ],
                "score": 0.31354204014791415
            }
        ],
          id: 1,
          data: {
            image: path
          }
        },

        onLabelStudioLoad: function (ls) {
          var c = ls.annotationStore.addAnnotation({
            userGenerate: true
          });
          ls.annotationStore.selectAnnotation(c.id);
        },
        onSubmitAnnotation: function (ls, annotation) {
          console.log(annotation.serializeAnnotation());
          setLabeltry("Leão");
          setPath(
            "http://localhost:8081/GK2_page-0280.jpg"
          );
          console.log(labeltry);
        }
      });
    }
  }, [labeltry, path]);
  // just a wrapper node to place LSF into
  return <div className="label-studio-root" ref={rootRef}></div>;
};
