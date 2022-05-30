"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3272],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(p,s(s({ref:t},d),{},{components:n})):a.createElement(p,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Actors in blockchain"},l="Actors in blockchain",c={unversionedId:"actor-model/actors-in-blockchain",id:"actor-model/actors-in-blockchain",title:"Actors in blockchain",description:"Previously we were talking about actors mostly in the abstraction of any blockchain",source:"@site/docs/05-actor-model/02-actors-in-blockchain.md",sourceDirName:"05-actor-model",slug:"/actor-model/actors-in-blockchain",permalink:"/fr/docs/1.0/actor-model/actors-in-blockchain",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/05-actor-model/02-actors-in-blockchain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Actors in blockchain"},sidebar:"docsSidebar",previous:{title:"Idea behind an Actor Model",permalink:"/fr/docs/1.0/actor-model/idea"},next:{title:"Smart contract as an actor",permalink:"/fr/docs/1.0/actor-model/actor-in-blokchain"}},d={},m=[{value:"Blockchain as a database",id:"database",level:2},{value:"Compile the contract",id:"compile",level:2},{value:"Contract code",id:"code",level:2},{value:"Contract instance",id:"instance",level:2},{value:"Addresses in CosmWasm",id:"address",level:2},{value:"Querying the contract",id:"queries",level:2},{value:"Executions to perform some actions",id:"executions",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actors-in-blockchain"},"Actors in blockchain"),(0,r.kt)("p",null,"Previously we were talking about actors mostly in the abstraction of any blockchain\nspecific terms. However before we would dive into the code, we need to establish\nsome common language, and to do so we would look at contracts from the perspective\nof external users, instead of their implementation."),(0,r.kt)("p",null,"In this part, I would use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," binary to communicate with cliffnet testnet.\nTo properly set it up, check the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env"},"Setting up Environment"),"."),(0,r.kt)("h2",{id:"database"},"Blockchain as a database"),(0,r.kt)("p",null,"It is kind of starting from the end, but I would start with the state part of\nthe actor model. Relating to traditional systems, there is one particular thing\nI like to compare blockchain with - it is a database."),(0,r.kt)("p",null,"Going back to the previous section we learned, that the most important part of\na contract is its state. Manipulating the state is the only way to persistently\nmanifest work performed to the world. But What is the thing which purpose is to\nkeep the state? It is a database!"),(0,r.kt)("p",null,"So here is my (as contract developer) point of view on contracts: it is distributed\ndatabase, with some magical mechanisms to make it democratic. Those \"magical\nmechanisms\" are crucial for BC's existence and they make they are reasons why even\nuse blockchain, but they are not relevant from the contract creator's point of\nview - for us, everything matter is the state."),(0,r.kt)("p",null,"But you can say: what about the financial part?! Isn't blockchain (",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),' in particular)\nthe currency implementation? With all of those gas costs, sending funds seems\nvery much like a money transfer, not database updates. And yes, you are kind of right,\nbut I have a solution for that too. Just imagine, that for every native token (by\n"native tokens" we meant tokens handled directly by blockchain, in contradiction\nto for example cw20 tokens) there is a special database bucket (or table if you prefer)\nwith mapping of address to how much of a token the address possesses. You can query\nthis table (querying for token balance), but you cannot modify it directly. To modify\nit you just send a message to a special build-in bank contract. And everything\nis still a database.'),(0,r.kt)("p",null,'But if blockchain is a database, then where smart contracts are stored?\nObviously - in the database itself! So now imagine another special table - this\none would contain a single table of code-ids mapped to blobs of wasm binaries. And\nagain - to operate on this table, you use "special contract" which is not accessible\nfrom another contract, but you can use it via ',(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," binary."),(0,r.kt)("p",null,"Now there is a question - why do I even care about BC being a DB? So the reason is\nthat it makes reasoning about everything in blockchain very natural. Do you\nremember, that every message in the actor model is transactional? It perfectly matches\ntraditional database transactions (meaning: every message starts a new transaction)!\nAlso when we would later talk about migrations, it would turn out, that\nmigrations in CosmWasm are very much equivalents of schema migrations in\ntraditional databases."),(0,r.kt)("p",null,"So the thing to remember - blockchain is very similar to a database, having some\nspecially reserved tables (like native tokens, code repository), with a special\nbucket created for every contract. A contract can look at every table in every\nbucket in the whole blockchain, but it can modify the only one he created."),(0,r.kt)("h2",{id:"compile"},"Compile the contract"),(0,r.kt)("p",null,"I will not go into the code for now, but to start with something we need compiled\ncontract binary. The ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," contract from\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus"},"cw-plus")," is simple enough to work with, for\nnow, so we will start with compiling it. Start with cloning the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:CosmWasm/cw-plus.git\n")),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," contract and build it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd cw-plus/contracts/cw4-group\n$ cargo wasm\n")),(0,r.kt)("p",null,"Your final binary should be located in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"cw-plus/target/wasm32-unknown-unknown/release")," folder (",(0,r.kt)("inlineCode",{parentName:"p"},"cw-plus")," being where you\ncloned your repository)."),(0,r.kt)("h2",{id:"code"},"Contract code"),(0,r.kt)("p",null,"When the contract binary is built, the first interaction with CosmWasm is uploading\nit to the blockchain (assuming you have your wasm binary in the working directory):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd tx wasm store ./cw4-group.wasm --from wallet $TXFLAG -y\n")),(0,r.kt)("p",null,"As a result of such an operation you would get json output like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'..\nlogs:\n..\n- events:\n  ..\n  - attributes:\n    - key: code_id\n      value: "1069"\n    type: store_code\n')),(0,r.kt)("p",null,"I ignored most of not fields as they are not relevant for now - what we\ncare about is the event emitted by blockchain with information about ",(0,r.kt)("inlineCode",{parentName:"p"},"code_id")," of\nstored contract - in my case the contract code was stored in blockchain under\nid of ",(0,r.kt)("inlineCode",{parentName:"p"},"1069"),". I can now look at the code by querying for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd query wasm code 1069 code.wasm\n")),(0,r.kt)("p",null,"And now the important thing - the contract code is not an actor. So what is a\ncontract code? I think that the easiest way to think about that is a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," or\na ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in programming. It defines some stuff about what can be done, but the\nclass itself is in most cases not very useful unless we create an instance\nof a type, on which we can call class methods. So now let's move forward to\ninstances of such contract classes."),(0,r.kt)("h2",{id:"instance"},"Contract instance"),(0,r.kt)("p",null,"Now we have a contract code, but what we want is an actual contract itself.\nTo create it, we need to instantiate it. Relating to analogy to programming,\ninstantiation is calling a constructor. To do that, I would send an\ninstantiate message to my contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ wasmd tx wasm instantiate 1069 \'{"members": []}\' --from wallet --label "Group 1" --no-admin $TXFLAG -y\n')),(0,r.kt)("p",null,"What I do here is creating a new contract and immediately call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate")," message on it. The structure of such a message is different for\nevery contract code. In particular, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," Instantiate message\ncontains two fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"members")," field which is the list of initial group members"),(0,r.kt)("li",{parentName:"ul"},"optional ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," field which defines an address who can add or remove\ngroup member")),(0,r.kt)("p",null,"In this case, I created an empty group with no admin - so which could never\nchange! It may seem like a not very useful contract, but it serves us as\na contract example."),(0,r.kt)("p",null,"As the result of instantiating I got result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'..\nlogs:\n..\n- events:\n  ..\n  - attributes:\n    - key: _contract_address\n      value: wasm1u0grxl65reu6spujnf20ngcpz3jvjfsp5rs7lkavud3rhppnyhmqqnkcx6\n    - key: code_id\n      value: "1069"\n    type: instantiate\n')),(0,r.kt)("p",null,"As you can see we again look at ",(0,r.kt)("inlineCode",{parentName:"p"},"logs[].events[]")," field, looking for\ninteresting event and extracting information from it - it is the common case.\nI will talk about events and their attributes in the future but in general\nit is a way to notify the world that something happened. Do you remember the\nKFC example? If a waiter is serving our dish, he would put a tray on the bar,\nand she would yell (or put on the screen) the order number - this would be\nannouncing an event, so you know some summary of operation, so you can go and\ndo something useful with it."),(0,r.kt)("p",null,"So what use can we do with the contract? We obviously can call it! But first\nI want to tell you about addresses."),(0,r.kt)("h2",{id:"address"},"Addresses in CosmWasm"),(0,r.kt)("p",null,"Address in CosmWasm is a way to refer to entities in the blockchain. There are two\ntypes of addresses: contract addresses, and non-contracts. The difference is,\nthat you can send messages to contract addresses, as there is some smart contract\ncode associated with them, and non-contracts are just users of the system. In an\nactor model, contract addresses represent actors, and non-contracts represent clients\nof the system."),(0,r.kt)("p",null,"When operating with blockchain using ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),", you also have an address - you\ngot one when you added the key to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# add wallets for testing\n$ wasmd keys add wallet3\n- name: wallet3\n  type: local\n  address: wasm1dk6sq0786m6ayg9kd0ylgugykxe0n6h0ts7d8t\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ap5zuScYVRr5Clz7QLzu0CJNTg07+7GdAAh3uwgdig2X"}\'\n  mnemonic: ""\n')),(0,r.kt)("p",null,"You can always check your address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ wasmd keys show walle\n- name: wallet\n  type: local\n  address: wasm1um59mldkdj8ayl5gknp9pnrdlw33v40sh5l4nx\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5bBdhYS/4qouAfLUH9h9+ndRJKvK0co31w4lS4p5cTE"}\'\n  mnemonic: ""\n')),(0,r.kt)("p",null,"Having an address is very important because it is requirement to being able\nto call anything. When we send a message to a contract it always knows the address\nwho sends this message so it can identify it - not to mention, that this sender\nis an address which would play a gas cost."),(0,r.kt)("h2",{id:"queries"},"Querying the contract"),(0,r.kt)("p",null,"So we have our contract, let try to do something with it - query would be the\neasiest thing to do. Let's do it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd query wasm contract-state smart wasm1u0grxl65reu6spujnf20ngcpz3jvjfsp5rs7lkavud3rhppnyhmqqnkcx6 '{ \"list_members\": {} }'\ndata:\n  members: []\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm...")," string is the contract address, and you have to substitute it with\nyour contract address. ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "list_members": {} }')," is query message we send to\ncontract. Typically CW smart contract queries are in the form of a single JSON\nobject, with one field: the query name (",(0,r.kt)("inlineCode",{parentName:"p"},"list_members")," in our case). The value\nof this field is another object, being query parameters - if there are any.\n",(0,r.kt)("inlineCode",{parentName:"p"},"list_members")," query handles two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after"),", which\nare both optional and which support result pagination. However in our case of\nan empty group they don't matter."),(0,r.kt)("p",null,"The query result we got is in human-readable text form (if we want to get the\nJSON from - for example, to process it further with ",(0,r.kt)("inlineCode",{parentName:"p"},"jq"),", just pass the\n",(0,r.kt)("inlineCode",{parentName:"p"},"-o json")," flag). As you can see response contains one field: ",(0,r.kt)("inlineCode",{parentName:"p"},"members")," which is\nan empty array."),(0,r.kt)("p",null,"So can we do anything more with this contract? Not much. But let's try to do\nsomething with a new one!"),(0,r.kt)("h2",{id:"executions"},"Executions to perform some actions"),(0,r.kt)("p",null,"The problem with our previous contract is, that for ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," contract, the\nonly one who can perform executions on it, is an admin, but our contract\ndoesn't have one. This is not a true for every smart contract, but it is a\nnature of this one."),(0,r.kt)("p",null,"So let's make a new group contract, but this time we would\nmake ourselves an admin. First, check our wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd keys show wallet\n")),(0,r.kt)("p",null,"And instantiate new group contract - this time with proper admin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ wasmd tx wasm instantiate 1069 \'{"members": [], "admin": "wasm1um59mldkdj8ayl5gknp9pnrdlw33v40sh5l4nx"}\' --from wallet --label "Group 1" --no-admin $TXFLAG -y\n..\nlogs:\n- events:\n  ..\n  - attributes:\n    - key: _contract_address\n      value: wasm1n5x8hmstlzdzy5jxd70273tuptr4zsclrwx0nsqv7qns5gm4vraqeam24u\n    - key: code_id\n      value: "1069"\n    type: instantiate\n')),(0,r.kt)("p",null,"You may ask, why do we pass some kind of ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-admin")," flag, if we just said,\nwe want to set an admin to the contract? The answer is sad and confusing,\nbut... it is a different admin. The admin we want to set is one checked\nby the contract itself and managed by him. The admin which is declined with\n",(0,r.kt)("inlineCode",{parentName:"p"},"--no-admin")," flag, is a wasmd-level admin, which can migrate\ncontract. You don't need to worry about the second one at least until you\nwill learn about contracts migrations - until then you can always pass the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--no-admin")," flag to the contract."),(0,r.kt)("p",null,"Now let's query our new contract for the member's list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd query wasm contract-state smart wasm1n5x8hmstlzdzy5jxd70273tuptr4zsclrwx0nsqv7qns5gm4vraqeam24u '{ \"list_members\": {} }'\ndata:\n  members: []\n")),(0,r.kt)("p",null,"Just like before - no members initially. Now check an admin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ wasmd query wasm contract-state smart wasm1n5x8hmstlzdzy5jxd70273tuptr4zsclrwx0nsqv7qns5gm4vraqeam24u '{ \"admin\": {} }'\ndata:\n  admin: wasm1um59mldkdj8ayl5gknp9pnrdlw33v40sh5l4nx\n")),(0,r.kt)("p",null,"So there is an admin, seems like the one we wanted to have there. So now\nwe would add someone to the group - may be ourselves?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wasmd tx wasm execute wasm1n5x8hmstlzdzy5jxd70273tuptr4zsclrwx0nsqv7qns5gm4vraqeam24u \'{ "update_members": { "add": [{ "addr": "wasm1um59mldkdj8ayl5gkn\np9pnrdlw33v40sh5l4nx", "weight": 1 }], "remove": [] } }\' --from wallet $TXFLAG -y\n')),(0,r.kt)("p",null,"The message for modifying the members is ",(0,r.kt)("inlineCode",{parentName:"p"},"update_members")," and it has two\nfields: members to remove, and members to add. Members to remove are\njust addresses. Members to add has a bit more complex structure: they\nare records with two fields: address and weight. Weight is not relevant\nfor us now, it is just metadata stored with every group member - for\nus, it would be always 1."),(0,r.kt)("p",null,"Let's query the contract again to check if our message changed anything:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmd query wasm contract-state smart wasm1n5x8hmstlzdzy5jxd70273tuptr4zsclrwx0nsqv7qns5gm4vraqeam24u '{ \"list_members\": {} }'\ndata:\n  members:\n  - addr: wasm1um59mldkdj8ayl5gknp9pnrdlw33v40sh5l4nx\n    weight: 1\n")),(0,r.kt)("p",null,"As you can see, the contract updated its state. This is basically how\nit works - sending messages to contracts causes them to update the state,\nand the state can be queried at any time. For now, to keep things simple\nwe were just interacting with the contract directly by ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),", but as described\nbefore - contracts can communicate with each other. However, to investigate\nthis we need to understand how to write contracts. Next time we would look\nat the contract structure and we will map it part by part to what we learned\nuntil now."))}h.isMDXComponent=!0}}]);