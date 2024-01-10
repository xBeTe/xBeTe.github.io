(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{317:function(e,r,v){"use strict";v.r(r);var t=v(14),_=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"二进制安装部署-orderer-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装部署-orderer-节点"}},[e._v("#")]),e._v(" 二进制安装部署 Orderer 节点")]),e._v(" "),r("h2",{attrs:{id:"规划网络拓扑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规划网络拓扑"}},[e._v("#")]),e._v(" 规划网络拓扑")]),e._v(" "),r("p",[e._v("3 个 orderer 节点；组织 org1 , org1 下有两个 peer 节点， peer0 和 peer1; 组织 org2 , org2 下有两个 peer 节点， peer0 和 peer1;")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://mydoc-pics.oss-cn-chengdu.aliyuncs.com/img/up-38ef835b996d7793bb88ed5d61f2305d020-1703763424579-3.png",alt:"img"}})]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("节点")]),e._v(" "),r("th",[e._v("宿主机 IP")]),e._v(" "),r("th",[e._v("hosts")]),e._v(" "),r("th",[e._v("端口（General/Operations/Admin）")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cli")]),e._v(" "),r("td",[e._v("192.168.159.10")]),e._v(" "),r("td",[e._v("N/A")]),e._v(" "),r("td",[e._v("N/A")])]),e._v(" "),r("tr",[r("td",[e._v("orderer0")]),e._v(" "),r("td",[e._v("192.168.159.10")]),e._v(" "),r("td",[e._v("orderer0.example.com")]),e._v(" "),r("td",[e._v("7050 , 8443 ， 9443")])]),e._v(" "),r("tr",[r("td",[e._v("orderer1")]),e._v(" "),r("td",[e._v("192.168.159.10")]),e._v(" "),r("td",[e._v("orderer1.example.com")]),e._v(" "),r("td",[e._v("8050 , 8444 ，9444")])]),e._v(" "),r("tr",[r("td",[e._v("orderer2")]),e._v(" "),r("td",[e._v("192.168.159.10")]),e._v(" "),r("td",[e._v("orderer2.example.com")]),e._v(" "),r("td",[e._v("9050 , 8445 ，9445")])])])]),e._v(" "),r("p",[e._v("==注：在单机环境下模拟三个排序节点的部署，故每个节点需要区别端口号==")]),e._v(" "),r("p",[e._v("根据 IP 与 host ，在系统 hosts 文件中新增")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/hosts\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 新增 ")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".159.10 orderer0.example.com \n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".159.10 orderer1.example.com \n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".159.10 orderer2.example.com\n")])])]),r("h2",{attrs:{id:"准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),r("p",[e._v("[生成网络需要的身份文件](./搭建 Fabric 生产网络.md)")]),e._v(" "),r("h2",{attrs:{id:"部署-orderer-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-orderer-节点"}},[e._v("#")]),e._v(" 部署 orderer 节点")]),e._v(" "),r("h3",{attrs:{id:"部署-orderer-0-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-orderer-0-节点"}},[e._v("#")]),e._v(" 部署 orderer 0 节点")]),e._v(" "),r("p",[e._v("在当前项目目录下新建 "),r("code",[e._v("orderer0")]),e._v(" 文件夹，复制生成 orderer 节点的核心文件到该目录下")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" orderer0\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" bin/orderer config/orderer.yaml orderer0/\n\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" orderer0\n")])])]),r("p",[e._v("编辑 "),r("code",[e._v("orderer.yaml")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.ListenAddress")]),e._v(" 为配置当前节点的服务器的 IP，"),r("code",[e._v("General.ListenPort")]),e._v(" 为为"),r("a",{attrs:{href:"#%E8%A7%84%E5%88%92%E7%BD%91%E7%BB%9C%E6%8B%93%E6%89%91"}},[e._v("网络拓扑")]),e._v(" 中的 "),r("code",[e._v("General")]),e._v("端口号")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.TLS")]),e._v(" 中：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Enabled")]),e._v(" 为 "),r("code",[e._v("true")])]),e._v(" "),r("li",[r("code",[e._v("PrivateKey")]),e._v("、"),r("code",[e._v("Certificate")]),e._v(" 字段，以及"),r("code",[e._v("RootCAs")]),e._v(" 数组第一项分别为"),r("code",[e._v("crypto-config")]),e._v(" 中的 "),r("code",[e._v("ordererOrganizations")]),e._v(" 中的 "),r("code",[e._v("orderer0")]),e._v(" 的身份文件：私钥"),r("code",[e._v("server.key")]),e._v("，节点证书 "),r("code",[e._v("server.crt")]),e._v("，CA 证书 "),r("code",[e._v("ca.crt")]),e._v(" 的路径")])])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.Cluster")]),e._v(" 中 "),r("code",[e._v("ClientCertificate")]),e._v("、"),r("code",[e._v("ClientPrivateKey")]),e._v(" 为节点证书 "),r("code",[e._v("server.crt")]),e._v("、私钥"),r("code",[e._v("server.key")]),e._v("的路径")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.BootstrapFile")]),e._v(" 为创世区块文件 "),r("code",[e._v("orderer.genesis.block")]),e._v(" 的路径")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.LocalMSPDir")]),e._v(" 为 "),r("code",[e._v("crypto-config")]),e._v(" 中的 "),r("code",[e._v("ordererOrganizations")]),e._v(" 中的 "),r("code",[e._v("orderer0")]),e._v(" 的"),r("code",[e._v("msp")]),e._v(" 文件夹路径")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("General.LocalMSPID")]),e._v(" 为 "),r("code",[e._v("OrdererMSP")])])]),e._v(" "),r("li",[r("p",[e._v("单机环境下须区分不同节点的 "),r("code",[e._v("FileLedger.Location")]),e._v(" 目录")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("Operations.ListenAddress")]),e._v(" 的端口为"),r("a",{attrs:{href:"#%E8%A7%84%E5%88%92%E7%BD%91%E7%BB%9C%E6%8B%93%E6%89%91"}},[e._v("网络拓扑")]),e._v(" 中的 "),r("code",[e._v("Operations")]),e._v("端口号")])]),e._v(" "),r("li",[r("p",[e._v("修改 "),r("code",[e._v("Admin.ListenAddress")]),e._v(" 为端口为"),r("a",{attrs:{href:"#%E8%A7%84%E5%88%92%E7%BD%91%E7%BB%9C%E6%8B%93%E6%89%91"}},[e._v("网络拓扑")]),e._v(" 中的 "),r("code",[e._v("Admin")]),e._v("端口号")])]),e._v(" "),r("li",[r("p",[e._v("单机环境下须区分不同节点的 "),r("code",[e._v("Consensus.WALDir")]),e._v(" 和 "),r("code",[e._v("Consensus.SnapDir")]),e._v(" 目录")])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mydoc-pics.oss-cn-chengdu.aliyuncs.com/fabric-config/orderer.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整配置"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("启动 orderer 0 节点")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("nohup")]),e._v(" ./orderer start "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" orderer0-log.log "),r("span",{pre:!0,attrs:{class:"token operator"}},[r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),r("h3",{attrs:{id:"部署-orderer-1-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-orderer-1-节点"}},[e._v("#")]),e._v(" 部署 orderer 1 节点")]),e._v(" "),r("p",[e._v("参考[orderer 0 节点的部署](###部署 orderer 0 节点)")]),e._v(" "),r("h3",{attrs:{id:"部署-orderer-2-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-orderer-2-节点"}},[e._v("#")]),e._v(" 部署 orderer 2 节点")]),e._v(" "),r("p",[e._v("参考[orderer 0 节点的部署](###部署 orderer 0 节点)")])])}),[],!1,null,null,null);r.default=_.exports}}]);