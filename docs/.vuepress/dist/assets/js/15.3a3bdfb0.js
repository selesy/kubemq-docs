(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{186:function(n,s,e){"use strict";e.r(s);var a=e(0),t=Object(a.a)({},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"deploying-a-kubemq-cluster"}},[n._v("Deploying a KubeMQ Cluster")]),n._v(" "),e("p",[n._v("A KubeMQ cluster can be deployed to a Kubernetes cluster as a stateful set or in the Docker environment using docker-compose.")]),n._v(" "),e("h3",{attrs:{id:"kubernetes-deployment"}},[n._v("Kubernetes Deployment")]),n._v(" "),e("p",[n._v("Setting up a KubeMQ cluster can be done with a simple yaml configuration file.")]),n._v(" "),e("h4",{attrs:{id:"kubernetes-configuration-generator"}},[n._v("Kubernetes Configuration Generator")]),n._v(" "),e("p",[n._v("A simple yaml configuration generator can used by login to your KubeMQ account: "),e("a",{attrs:{href:"https://account.kubemq.io/home/get-kubemq/kubernetes",target:"_blank",rel:"noopener noreferrer"}},[n._v("here"),e("OutboundLink")],1),n._v(".")]),n._v(" "),n._m(0),n._v(" "),e("h4",{attrs:{id:"manual-kubernetes-yaml-configuration"}},[n._v("Manual Kubernetes Yaml Configuration")]),n._v(" "),e("p",[n._v("An example of a stateful set ymal configuration")]),n._v(" "),n._m(1),e("h3",{attrs:{id:"docker-compose-deployment"}},[n._v("docker-compose Deployment")]),n._v(" "),e("p",[n._v("A KubeMQ cluster can be deployed with a docker-compose ymal file as described below:")]),n._v(" "),n._m(2)])},[function(){var n=this.$createElement,s=this._self._c||n;return s("p",[s("img",{attrs:{src:"kubernetes-yaml-configuration-generator.PNG",alt:""}})])},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("apiVersion: v1\nkind: List\nitems:\n  - apiVersion: apps/v1beta2\n    kind: StatefulSet\n    metadata:\n      name: kubemq-cluster\n    spec:\n      selector:\n        matchLabels:\n          app: kubemq-cluster\n      replicas: 3\n      serviceName: kubemq-cluster\n      template:\n        metadata:\n          labels:\n            app: kubemq-cluster\n        spec:\n          containers:\n            - env:\n                - name: KUBEMQ_TOKEN\n                  value: \n                - name: CLUSTER_ROUTES\n                  value: 'kubemq-cluster:5228'\n                - name: CLUSTER_PORT\n                  value: '5228'\n                - name: CLUSTER_ENABLE\n                  value: 'true'\n                - name: KUBEMQ_LOG_LEVEL\n                  value: '2'\n                - name: GRPC_PORT\n                  value: '50000'\n                - name: REST_PORT\n                  value: '9090'\n                - name: KUBEMQ_PORT\n                  value: '8080'\n              image: 'kubemq/kubemq:latest'\n              imagePullPolicy: IfNotPresent\n              name: kubemq-cluster\n              ports:\n                - containerPort: 50000\n                  name: grpc-port\n                  protocol: TCP\n                - containerPort: 8080\n                  name: metrics-port\n                  protocol: TCP\n                - containerPort: 9090\n                  name: rest-port\n                  protocol: TCP\n                - containerPort: 5228\n                  name: cluster-port\n                  protocol: TCP\n          restartPolicy: Always\n  - apiVersion: v1\n    kind: Service\n    metadata:\n      name: kubemq-cluster\n    spec:\n      ports:\n        - name: metrics-port\n          port: 8080\n          protocol: TCP\n          targetPort: 8080\n        - name: grpc-port\n          port: 50000\n          protocol: TCP\n          targetPort: 50000\n        - name: cluster-port\n          port: 5228\n          protocol: TCP\n          targetPort: 5228\n        - name: rest-port\n          port: 9090\n          protocol: TCP\n          targetPort: 9090\n      sessionAffinity: None\n      type: NodePort\n      selector:\n        app: kubemq-cluster\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br")])])},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('version: \'3\'\nservices:\n  kubemq-0:\n    image: kubemq/kubemq:latest\n    hostname: "kubemq-0"\n    ports:\n      - "8080:8080"\n      - "9090:9090"\n      - "5228:5228"\n      - "50000:50000"\n    environment:\n      - KUBEMQ_HOST=kubemq-0\n      - CLUSTER_IS_SEED=true\n      - CLUSTER_ENABLE=true\n      - CLUSTER_PORT=5228\n      - CLUSTER_ROUTES=kubemq-1:5229,kubemq-2:5230\n      - KUBEMQ_TOKEN=1167cbd8-9194-11e8-9eb6-529269fb1459\n    networks:\n      - kubemqnet\n    volumes:\n      - kubemq_vol1:/store\n  kubemq-1:\n    image: tradency/kubemq:latest\n    hostname: "kubemq-1"\n    ports:\n      - "8081:8080"\n      - "9091:9090"\n      - "5229:5229"\n      - "50001:50000"\n    environment:\n      - KUBEMQ_HOST=kubemq-1\n      - CLUSTER_IS_SEED=false\n      - CLUSTER_ENABLE=true\n      - CLUSTER_PORT=5229\n      - CLUSTER_ROUTES=kubemq-2:5230,kubemq-0:5228\n      - KUBEMQ_TOKEN=1167cbd8-9194-11e8-9eb6-529269fb1459\n    depends_on:\n      - "kubemq-0"\n    volumes:\n      - kubemq_vol2:/store\n    networks:\n      - kubemqnet\n  kubemq-2:\n    image: tradency/kubemq:latest\n    hostname: "kubemq-2"\n    ports:\n      - "8082:8080"\n      - "9092:9090"\n      - "5230:5230"\n      - "50002:50000"\n    environment:\n      - KUBEMQ_HOST=kubemq-2\n      - CLUSTER_IS_SEED=false\n      - CLUSTER_ENABLE=true\n      - CLUSTER_PORT=5230\n      - CLUSTER_ROUTES=kubemq-1:5229,kubemq-0:5228\n      - KUBEMQ_TOKEN=1167cbd8-9194-11e8-9eb6-529269fb1459\n    depends_on:\n      - "kubemq-0"\n      - "kubemq-1"\n    volumes:\n      - kubemq_vol3:/store\n    networks:\n      - kubemqnet\nnetworks:\n  kubemqnet:\nvolumes:\n  kubemq_vol1:\n  kubemq_vol2:\n  kubemq_vol3:\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br")])])}],!1,null,null,null);t.options.__file="installation-cluster.md";s.default=t.exports}}]);