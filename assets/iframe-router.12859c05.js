import{o as r,a as o,f as h,d as c,u as i}from"./vue-libs.6baccb04.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const p of n)if(p.type==="childList")for(const e of p.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&t(e)}).observe(document,{childList:!0,subtree:!0});function l(n){const p={};return n.integrity&&(p.integrity=n.integrity),n.referrerpolicy&&(p.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?p.credentials="include":n.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(n){if(n.ep)return;n.ep=!0;const p=l(n);fetch(n.href,p)}};x();var Y=(a,s)=>{const l=a.__vccOpts||a;for(const[t,n]of s)l[t]=n;return l};const k="modulepreload",u={},w="./",Q=function(s,l){return!l||l.length===0?s():Promise.all(l.map(t=>{if(t=`${w}${t}`,t in u)return;u[t]=!0;const n=t.endsWith(".css"),p=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${p}`))return;const e=document.createElement("link");if(e.rel=n?"stylesheet":k,n||(e.as="script",e.crossOrigin=""),e.href=t,document.head.appendChild(e),n)return new Promise((y,_)=>{e.addEventListener("load",y),e.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},q={class:"van-doc-markdown-body"},P=c("h1",null,"\u4ECB\u7ECD",-1),E=c("div",{class:"van-doc-card"},[c("h3",{id:"guan-yu",tabindex:"-1"},"\u5173\u4E8E"),c("p",null,"\u57FA\u4E8E vant3 \u7684\u4E8C\u6B21\u5C01\u88C5")],-1),S=c("div",{class:"van-doc-card"},[c("h3",{id:"te-xing",tabindex:"-1"},"\u7279\u6027"),c("ul",null,[c("li",null,"\u4F7F\u7528\u65B9\u4FBF"),c("li",null,"\u7075\u6D3B")])],-1),C={__name:"home",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",q,[h(`
 * @Author: zhoulf
 * @FilePath: /mobile-ui/docs/home.md
 * @Date: 2022-03-17 11:27:27
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 14:41:13
 * @Description:
`),P,E,S]))}},L={class:"van-doc-markdown-body"},A=i(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h2><div class="van-doc-card"><h3 id="zhu-yi" tabindex="-1">\u6CE8\u610F</h3><p>\u672C\u5305\u57FA\u4E8E<code>vant</code>\u4E8C\u6B21\u5F00\u53D1\uFF0C\u8BF7\u81EA\u884C\u5B89\u88C5<code>vant</code>\u5E76\u5F15\u5165</p></div><div class="van-doc-card"><h3 id="fang-shi-yi.-zi-dong-an-xu-yin-ru-zu-jian-tui-jian" tabindex="-1">\u65B9\u5F0F\u4E00. \u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\uFF08\u63A8\u8350\uFF09</h3><p><a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> \u662F\u4E00\u6B3E babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u7684\u5199\u6CD5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F\u3002</p><pre><code class="language-bash"><span class="hljs-comment"># \u5B89\u88C5\u63D2\u4EF6</span>
npm i babel-plugin-import -D
</code></pre><pre><code class="language-js"><span class="hljs-comment">// \u63A5\u7740\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u5F15\u5165 @cm/cm-mobile-ui \u7EC4\u4EF6</span>
<span class="hljs-comment">// \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u4EE3\u7801\u8F6C\u5316\u4E3A\u65B9\u5F0F\u4E8C\u4E2D\u7684\u6309\u9700\u5F15\u5165\u5F62\u5F0F</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cm/cm-mobile-ui&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="fang-shi-er.-shou-dong-an-xu-yin-ru-zu-jian" tabindex="-1">\u65B9\u5F0F\u4E8C. \u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6</h3><p>\u5728\u4E0D\u4F7F\u7528\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u624B\u52A8\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Form</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cm/mobile-ui/lib/form&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@cm/mobile-ui/lib/form/style&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="fang-shi-san.-dao-ru-suo-you-zu-jian" tabindex="-1">\u65B9\u5F0F\u4E09. \u5BFC\u5165\u6240\u6709\u7EC4\u4EF6</h3><p>@cm/cm-mobile-ui \u652F\u6301\u4E00\u6B21\u6027\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6\uFF0C\u5F15\u5165\u6240\u6709\u7EC4\u4EF6\u4F1A\u589E\u52A0\u4EE3\u7801\u5305\u4F53\u79EF\uFF0C\u56E0\u6B64\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>);
<span class="hljs-keyword">import</span> <span class="hljs-title class_">CMMUi</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cm/mobile-ui&#39;</span>;

app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CMMUi</span>);
</code></pre><blockquote><p>Tips: \u914D\u7F6E\u6309\u9700\u5F15\u5165\u540E\uFF0C\u5C06\u4E0D\u5141\u8BB8\u76F4\u63A5\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6\u3002</p></blockquote></div>`,6),I={__name:"quickstart",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",L,[h(`
 * @Author: zhoulf
 * @FilePath: /mobile-ui/docs/quickstart.md
 * @Date: 2022-03-17 11:27:27
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 14:48:55
 * @Description:
`),A]))}},z={class:"van-doc-markdown-body"},D=i(`<h1>Form \u8868\u5355\u7EC4\u4EF6</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u57FA\u4E8E<code>vant/form</code>\u8868\u5355\u7EC4\u4EF6\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u65E5\u5386\u9009\u62E9\u3001\u5730\u533A\u9009\u62E9\u3001\u591A\u9009\u3001\u5355\u9009\u3001\u65E5\u671F\u9009\u62E9\u3001\u9009\u62E9\u5668\u3001\u6ED1\u5757\u3001\u6B65\u8FDB\u5668\u3001\u5F00\u5173\u3001\u4E0A\u4F20\u3001\u81EA\u5B9A\u4E49\u63D2\u69FD\u8F93\u5165\u7C7B\u578B</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cmm-form</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form&quot;</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>
  <span class="hljs-attr">:field-schema</span>=<span class="hljs-string">&quot;fieldSchema&quot;</span>
  <span class="hljs-attr">label-width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">:show-error</span>=<span class="hljs-string">&quot;false&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;_handleChange&quot;</span>
  @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;_onSubmit&quot;</span>
  <span class="hljs-attr">upload-action</span>=<span class="hljs-string">&quot;http://10.10.77.194:8092/oamp-store/file/uploadFile&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;other&quot;</span> <span class="hljs-attr">slot-scope</span>=<span class="hljs-string">&quot;{value}&quot;</span>&gt;</span>
    \u6211\u662F\u81EA\u5B9A\u4E49\u63D2\u69FD\u5185\u5BB9\uFF1A
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cmm-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive, toRefs, h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">CmmForm</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;..&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;DemoForm&#39;</span>,
  <span class="hljs-attr">components</span>: {
    <span class="hljs-title class_">CmmForm</span>,
  },
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> state = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">data</span>: {
        <span class="hljs-attr">name</span>: <span class="hljs-number">233</span>,
        <span class="hljs-attr">partIn</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">partInRepeat</span>: [<span class="hljs-string">&#39;b&#39;</span>],
        <span class="hljs-attr">sex</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">num</span>: <span class="hljs-number">6</span>,
        <span class="hljs-attr">rate</span>: <span class="hljs-number">3.5</span>,
        <span class="hljs-attr">score</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">city</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">slotProp</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">birthday</span>: <span class="hljs-string">&#39;2022-03-16 13:11&#39;</span>,
      },
      <span class="hljs-attr">model</span>: [
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;field&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u59D3\u540D&#39;</span>,
            <span class="hljs-attr">rules</span>: [
              {
                <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u59D3\u540D&#39;</span>,
                <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;onBlur&#39;</span>,
              },
            ],
            <span class="hljs-attr">onClickRightIcon</span>: <span class="hljs-function">() =&gt;</span> {
              <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u53F3\u4FA7\u56FE\u6807&#39;</span>);
            },
            <span class="hljs-attr">rightIcon</span>: <span class="hljs-string">&#39;chat-o&#39;</span>,
          },
          <span class="hljs-attr">slots</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-function">() =&gt;</span> [<span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;div&#39;</span>, <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u83DC\u5355&#39;</span>)],
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;switch&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;partIn&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u662F\u5426\u53C2\u52A0\u6D3B\u52A8&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;20&#39;</span>,
            <span class="hljs-attr">activeColor</span>: <span class="hljs-string">&#39;#ee0a24&#39;</span>,
            <span class="hljs-attr">inactiveColor</span>: <span class="hljs-string">&#39;#dcdee0&#39;</span>,
            <span class="hljs-attr">activeValue</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">inactiveValue</span>: <span class="hljs-number">0</span>,
          },
          <span class="hljs-attr">extra</span>: {
            <span class="hljs-attr">fieldSlots</span>: {
              <span class="hljs-comment">// extra: () =&gt; h(&#39;img&#39;, { style: &#39;height:20px&#39;, src: &#39;https://img01.yzcdn.cn/vant/user-active.png&#39; }),</span>
              <span class="hljs-attr">label</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#39;xxx&#39;</span>,
            },
            <span class="hljs-attr">fieldProps</span>: {
              <span class="hljs-attr">rightIcon</span>: <span class="hljs-string">&#39;chat-o&#39;</span>,
            },
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;checkboxGroup&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u590D\u9009\u6846\u7EC4&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;partInRepeat&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">data</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;a&#39;</span>,
                <span class="hljs-attr">shape</span>: <span class="hljs-string">&#39;round&#39;</span>,
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7BEE\u7403&#39;</span>,
              },
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;b&#39;</span>,
                <span class="hljs-attr">shape</span>: <span class="hljs-string">&#39;square&#39;</span>,
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8DB3\u7403&#39;</span>,
              },
            ],
          },
          <span class="hljs-attr">extra</span>: {
            <span class="hljs-attr">checkboxGroupProps</span>: {
              <span class="hljs-attr">direction</span>: <span class="hljs-string">&#39;horizontal&#39;</span>,
            },
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;radio&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">data</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">shape</span>: <span class="hljs-string">&#39;round&#39;</span>,
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
                <span class="hljs-attr">slots</span>: {
                  <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#39;\u7BEE\u7403&#39;</span>,
                  <span class="hljs-attr">icon</span>: <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> <span class="hljs-title function_">getIcon</span>(props),
                },
              },
              {
                <span class="hljs-attr">name</span>: <span class="hljs-number">2</span>,
                <span class="hljs-attr">shape</span>: <span class="hljs-string">&#39;square&#39;</span>,
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
              },
            ],
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;stepper&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;num&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D2D\u4E70\u6570\u91CF&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">min</span>: <span class="hljs-string">&#39;5&#39;</span>,
            <span class="hljs-attr">max</span>: <span class="hljs-string">&#39;8&#39;</span>,
            <span class="hljs-attr">step</span>: <span class="hljs-string">&#39;2&#39;</span>,
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;rate&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;rate&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8BC4\u5206&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">count</span>: <span class="hljs-number">5</span>,
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;slider&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;score&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6210\u7EE9&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">max</span>: <span class="hljs-number">10</span>,
            <span class="hljs-attr">min</span>: <span class="hljs-number">0</span>,
          },
          <span class="hljs-attr">slots</span>: {
            <span class="hljs-attr">button</span>: <span class="hljs-function">(<span class="hljs-params">prop</span>) =&gt;</span> <span class="hljs-title function_">getScoreButton</span>(prop),
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;slot&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;slotProp&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49slot&#39;</span>,
          <span class="hljs-attr">slots</span>: {
            <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span>
              <span class="hljs-title function_">h</span>(
                <span class="hljs-string">&#39;div&#39;</span>,
                {
                  <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {
                    <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u81EA\u5B9A\u4E49\u83DC\u5355&#39;</span>);
                  },
                },
                [<span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u83DC\u5355&#39;</span>]
              ),
          },
          <span class="hljs-attr">extra</span>: {
            <span class="hljs-attr">fieldSlots</span>: {
              <span class="hljs-attr">label</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#39;xxx&#39;</span>,
            },
            <span class="hljs-attr">fieldProps</span>: {
              <span class="hljs-attr">rightIcon</span>: <span class="hljs-string">&#39;chat-o&#39;</span>,
            },
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;picker&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">columnsFieldNames</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;label&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value&#39;</span> },
            <span class="hljs-attr">onConfirm</span>: <span class="hljs-function">(<span class="hljs-params">param</span>) =&gt;</span> {
              <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(param);
            },
            <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6D4B\u8BD5&#39;</span>,
            <span class="hljs-attr">columns</span>: [
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span> },
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span> },
            ],
          },
          <span class="hljs-attr">extra</span>: {
            <span class="hljs-attr">fieldProps</span>: {
              <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u57CE\u5E02&#39;</span>,
            },
            <span class="hljs-attr">popupProps</span>: {
              <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>,
            },
          },
        },
        {
          <span class="hljs-attr">xType</span>: <span class="hljs-string">&#39;datetimePicker&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;birthday&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u751F\u65E5&#39;</span>,
          <span class="hljs-attr">props</span>: {
            <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9009\u62E9\u65E5\u671F&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;datetime&#39;</span>,
            <span class="hljs-attr">valueFormat</span>: <span class="hljs-string">&#39;yyyy-MM-dd hh:mm&#39;</span>,
          },
          <span class="hljs-attr">extra</span>: {
            <span class="hljs-attr">fieldProps</span>: {
              <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u57CE\u5E02&#39;</span>,
            },
            <span class="hljs-attr">popupProps</span>: {
              <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
            },
          },
        },
      ],
    });
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">getIcon</span> = (<span class="hljs-params">{ checked = <span class="hljs-literal">true</span> }</span>) =&gt; {
      <span class="hljs-keyword">const</span> src = checked
        ? <span class="hljs-string">&#39;https://img01.yzcdn.cn/vant/user-active.png&#39;</span>
        : <span class="hljs-string">&#39;https://img01.yzcdn.cn/vant/user-inactive.png&#39;</span>;
      <span class="hljs-keyword">return</span> <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;img&#39;</span>, {
        <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;height:20px&#39;</span>,
        src,
      });
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">getScoreButton</span> = (<span class="hljs-params">{ value }</span>) =&gt; <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;button&#39;</span>, {}, [value]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(values);
    };
    <span class="hljs-keyword">return</span> {
      ...<span class="hljs-title function_">toRefs</span>(state),
      getIcon,
      getScoreButton,
      onSubmit,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>\u652F\u6301<code>vant/form</code>\u7EC4\u4EF6\u7684\u6240\u6709<code>props</code>\u3001<code>event</code>\u548C<code>\u65B9\u6CD5</code>\uFF0C<a href="https://vant-contrib.gitee.io/vant/#/zh-CN/form" target="_blank">\u70B9\u51FB\u67E5\u770B</a></p><p>\u4E0B\u5217\u5217\u51FA\u6269\u5C55\u5C5E\u6027\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u8868\u5355\u9884\u7F6E\u6570\u636E</td><td><em>object</em></td><td>-</td></tr><tr><td>fieldSchema</td><td>\u8868\u5355\u9879\u914D\u7F6E</td><td><em>Array&lt;_ItemSchema</em>&gt;_</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="itemschema-props" tabindex="-1">ItemSchema Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>xType</td><td>\u8F93\u5165\u7C7B\u578B\uFF0C</td><td><em>string</em></td><td>-</td></tr><tr><td>prop</td><td>\u7ED1\u5B9A\u7684\u5B57\u6BB5\u540D</td><td><em>string</em></td><td>-</td></tr><tr><td>props</td><td>\u8F93\u5165\u7C7B\u578B\u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u8BE5\u6570\u636E\u4F1A\u900F\u4F20\u5230\u5BF9\u5E94\u8F93\u5165\u57DF\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\uFF0C\u6545\u53C2\u8003\u5177\u4F53\u7C7B\u578B\u7684<code>Props\u3001on</code>\u5B9A\u4E49\uFF0C</td><td><em>object</em></td><td>-</td></tr><tr><td>slots</td><td>\u8F93\u5165\u7C7B\u578B\u7684\u5C5E\u6027\u63D2\u69FD\uFF0C\u6269\u5C55\u81EA\u5BF9\u5E94\u8F93\u5165\u57DF\u7EC4\u4EF6\uFF0C\u6545\u53C2\u8003\u5177\u4F53\u7C7B\u578B\u7684<code>Slots</code>\u5B9A\u4E49</td><td><em>object</em></td><td>-</td></tr><tr><td>extra</td><td>\u989D\u5916\u8865\u5145\u5B57\u6BB5\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u8F93\u5165\u57DF\u4F1A\u6709\u4E0D\u540C\u7684\u53C2\u6570\u5B9A\u4E49\uFF0C</td><td><em>object</em></td><td>fieldProps\u3001popupProps\u3001popupProps\u3001fieldSlots</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="form_field_types-shuo-ming" tabindex="-1">FORM_FIELD_TYPES \u8BF4\u660E</h3><p>\u5B9A\u4E49\u4E86\u652F\u6301\u7684\u8F93\u5165\u7C7B\u578B\uFF0C\u76EE\u524D\u652F\u6301\u7684\u7C7B\u578B\u6709 <code>field</code>\u3001<code>switch</code>\u3001<code>checkbox</code>\u3001<code>radio</code>\u3001<code>stepper</code>\u3001<code>rate</code>\u3001<code>slider</code>\u3001<code>uploader</code>\u3001<code>picker</code>\u3001<code>datetimePicker</code>\u3001<code>slot</code></p></div><div class="van-doc-card"><h3 id="extra-props" tabindex="-1">extra Props</h3><h4 id="checkbox-shu-xing-shuo-ming" tabindex="-1">CHECKBOX \u5C5E\u6027\u8BF4\u660E\uFF1A</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u590D\u9009\u6846\u914D\u7F6E\u9879\uFF0C\u6570\u636E\u7ED3\u6784\u540C<code>ItemSchema</code>\u4E2D\u7684<code>props</code>\u3001<code>slots</code> \uFF5C <em>Array</em></td><td>-</td><td></td></tr></tbody></table><h4 id="radio-shu-xing-shuo-ming" tabindex="-1">RADIO \u5C5E\u6027\u8BF4\u660E\uFF1A</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5355\u9009\u6846\u914D\u7F6E\u9879\uFF0C\u6570\u636E\u7ED3\u6784\u540C<code>ItemSchema</code>\u4E2D\u7684<code>props</code>\u3001<code>slots</code> \uFF5C <em>Array</em></td><td>-</td><td></td></tr></tbody></table><h4 id="calendar-shu-xing-shuo-ming" tabindex="-1">CALENDAR \u5C5E\u6027\u8BF4\u660E\uFF1A</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>showFormat</td><td>\u7528\u4E8E\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570</td><td><em>Function&lt; _string</em> | <em>string[]</em> &gt;_</td><td>-</td></tr><tr><td>valueFormat</td><td>\u9009\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\u5316\uFF0C\u5982<code>yyyy-MM-dd</code> \uFF5C <em>string</em></td><td>-</td><td></td></tr></tbody></table><h4 id="datetime_picker-shu-xing-shuo-ming" tabindex="-1">DATETIME_PICKER \u5C5E\u6027\u8BF4\u660E\uFF1A</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>valueFormat</td><td>\u9009\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\u5316\uFF0C\u5982<code>yyyy-MM-dd</code> \uFF5C <em>string</em></td><td>-</td><td></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u66F4\u89E6\u53D1\u7684\u65B9\u6CD5\uFF0C\u4F1A\u629B\u51FA<code>prop</code>\u3001<code>value</code>\u3001<code>formData</code>\u4E09\u4E2A\u503C</td><td><em>{prop:string\uFF0Cvalue:any\uFF0CformData:object}</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u652F\u6301<code>vant/form</code>\u7EC4\u4EF6\u7684\u6240\u6709<code>\u65B9\u6CD5</code>\uFF0C<a href="https://vant-contrib.gitee.io/vant/#/zh-CN/form" target="_blank">\u70B9\u51FB\u67E5\u770B</a></p><p>\u4E0B\u5217\u5217\u51FA\u6269\u5C55\u5C5E\u6027\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>_onSubmit</td><td>\u83B7\u53D6\u8868\u5355\u6570\u636E</td><td><em>object</em></td></tr><tr><td>resetValidation</td><td>\u91CD\u7F6E\u8868\u5355\u6570\u636E</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="picker" tabindex="-1">Picker</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>columnsFieldNames</td><td>\u81EA\u5B9A\u4E49\u5173\u952E\u5B57</td><td>{ text: &#39;label&#39;, value: &#39;value&#39; }</td></tr></tbody></table></div>`,13),F={__name:"README",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",z,[h(`
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/README.md
 * @Date: 2022-03-17 11:54:29
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-18 11:52:51
 * @Description:
`),D]))}},T={class:"van-doc-markdown-body"},M=i(`<h1>List \u5217\u8868</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>List \u662F\u4E00\u4E2A\u57FA\u4E8E<code>vant/pullrefresh</code>\u3001<code>vant/list</code>\u4E8C\u6B21\u5C01\u88C5\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u6570\u636E\u8BF7\u6C42\u903B\u8F91\uFF08\u5305\u542B\u7A7A\u6570\u636E\u3001\u4E0B\u4E00\u9875\u3001\u7F51\u7EDC\u5F02\u5E38\u5224\u65AD\uFF09</p></div><div class="van-doc-card"><h3 id="shi-yong-chang-jing" tabindex="-1">\u4F7F\u7528\u573A\u666F</h3><p>\u5E38\u7528\u8BED\u5217\u8868\u9875\u3001\u67E5\u8BE2\u5217\u8868\u9875\u3001\u5305\u542B tab \u6807\u7B7E\u7EC4\u7684\u5217\u8868\u7B49</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">demo-section</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">cm-list</span> <span class="hljs-attr">:get-list</span>=<span class="hljs-string">&quot;getList&quot;</span>&gt;</span>
        <span class="hljs-comment">&lt;!--   \u5217\u8868\u6570\u636E      --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">list</span>=<span class="hljs-string">&quot;{ list }&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-cell&quot;</span>&gt;</span>
              \u5B50\u5143\u7D20{{ item.pageIndex }}-{{ item.index }}
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">cm-list</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">demo-section</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: { cmList },
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">getList</span> = (<span class="hljs-params">{ pageIndex }</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-keyword">if</span> (pageIndex === <span class="hljs-number">3</span>) {
            <span class="hljs-title function_">reject</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">&#39;\u5931\u8D25&#39;</span>));
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">const</span> list = [];

            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
              list.<span class="hljs-title function_">push</span>({
                pageIndex,
                <span class="hljs-attr">index</span>: i,
              });
            }

            <span class="hljs-title function_">resolve</span>({
              list,
              <span class="hljs-attr">count</span>: <span class="hljs-number">25</span>,
            });
          }
        }, <span class="hljs-number">1000</span>);
      });
    <span class="hljs-keyword">return</span> { getList };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoLoad</td><td>\u662F\u5426\u81EA\u52A8\u8BF7\u6C42\u6570\u636E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>getList</td><td>\u6570\u636E\u83B7\u53D6\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A promise \u5BF9\u8C61</td><td><em>Function&lt; { pageIndex: Number, pageSize: Number } &gt;</em></td><td>-</td></tr><tr><td>emptyText</td><td>\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57</td><td><em>string</em></td><td>\u6682\u65E0\u6570\u636E</td></tr><tr><td>noMoreText</td><td>\u6CA1\u6709\u4E0B\u4E00\u9875\u63D0\u793A\u6587\u5B57</td><td><em>string</em></td><td>\u6CA1\u6709\u66F4\u591A\u4E86</td></tr><tr><td>errorText</td><td>\u6570\u636E\u8BF7\u6C42\u5F02\u5E38\u63D0\u793A\u6587\u5B57</td><td><em>string</em></td><td>\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slot" tabindex="-1">Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>list</td><td>\u6570\u636E\u5217\u8868\u63D2\u69FD</td><td>{ list: Array }</td></tr><tr><td>empty</td><td>\u7A7A\u6570\u636E\u63D2\u69FD</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetPage</td><td>\u91CD\u7F6E\u5237\u65B0\u6570\u636E,\u5237\u65B0\u7B2C\u4E00\u9875</td><td>-</td></tr></tbody></table></div>`,9),R={__name:"README",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",T,[h(`
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/list/README.md
 * @Date: 2022-03-17 16:47:58
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-17 16:51:28
 * @Description:
`),M]))}},$={class:"van-doc-markdown-body"},N=i(`<h2 id="swipe-zu-jian" tabindex="-1">swipe \u7EC4\u4EF6</h2><div class="van-doc-card"><h3 id="shi-yong" tabindex="-1">\u4F7F\u7528</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cm/mobile-ui&#39;</span>
<span class="hljs-attr">components</span>: {
  [<span class="hljs-title class_">CmmSwipe</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Swipe</span>
}
</code></pre></div><div class="van-doc-card"><h3 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h3><pre><code class="language-HTML">  <span class="hljs-tag">&lt;<span class="hljs-name">cmm-swipe</span>
      <span class="hljs-attr">list</span>=<span class="hljs-string">&quot;[a, b, c]&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;itemClick&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(index);
};

<span class="hljs-keyword">const</span> <span class="hljs-title function_">itemClick</span> = (<span class="hljs-params">e, item, index</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(e, item, index);
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>props \u81EA\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0Cslots \u63D2\u69FD\u76F8\u5173\uFF0CformDate \u4E0A\u4F20\u719F\u6089\u6BD4\u5982\u5730\u5740\uFF0C\u53C2\u6570\u7B49</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u5C55\u793A\u5217\u8868</td><td>Array / String</td><td>[]</td></tr><tr><td>model</td><td>\u5C55\u793A\u7C7B\u578B</td><td>String</td><td>img</td></tr><tr><td>separator</td><td>\u5206\u5272\u7B26\uFF0C\u5982\u6709\u9700\u8981\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5206\u5272\u7684\u7B26\u53F7</td><td>String</td><td>,</td></tr><tr><td>options</td><td>vant \u539F\u6709\u7684\u914D\u7F6E</td><td>Object</td><td>{}</td></tr></tbody></table></div>`,5),O=[N],U={__name:"README",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",$,O))}},B={class:"van-doc-markdown-body"},V=i(`<h2 id="uploader-zu-jian" tabindex="-1">uploader \u7EC4\u4EF6</h2><div class="van-doc-card"><h3 id="shi-yong" tabindex="-1">\u4F7F\u7528</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cm/mobile-ui&#39;</span>
<span class="hljs-attr">components</span>: {
  [<span class="hljs-title class_">Uploader</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Uploader</span>
}
</code></pre></div><div class="van-doc-card"><h3 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h3><pre><code class="language-HTML"> <span class="hljs-tag">&lt;<span class="hljs-name">cmm-uploader</span>
      <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;ids&quot;</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;uploadForm&quot;</span>
    /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> uploadForm = <span class="hljs-title function_">ref</span>({
  <span class="hljs-attr">props</span>: {
    <span class="hljs-attr">multiple</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">accept</span>: <span class="hljs-string">&#39;image/*&#39;</span>,
    <span class="hljs-attr">maxCount</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">afterRead</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value);
    },
    <span class="hljs-attr">delete</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value);
    },
    <span class="hljs-attr">beforeRead</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    },
  },
  <span class="hljs-comment">// slots: {</span>
  <span class="hljs-comment">//   default: () =&gt; { return h(&#39;div&#39;, &#39;\u81EA\u5B9A\u4E49\u663E\u793A&#39;) }</span>
  <span class="hljs-comment">// },</span>
  <span class="hljs-attr">formDate</span>: {
    <span class="hljs-attr">data</span>: {
      <span class="hljs-attr">userId</span>: <span class="hljs-number">2132</span>,
    },
  },
});
<span class="hljs-keyword">return</span> { uploadForm };
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>props \u81EA\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0Cslots \u63D2\u69FD\u76F8\u5173\uFF0CformDate \u4E0A\u4F20\u719F\u6089\u6BD4\u5982\u5730\u5740\uFF0C\u53C2\u6570\u7B49</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td>FileListItem[]</td><td>[]</td></tr><tr><td>accept</td><td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</td><td>string</td><td>image/*</td></tr><tr><td>after-read</td><td>\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td>innerFiles[] \u6587\u4EF6\u3001files:ids[]</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="formdate" tabindex="-1">formDate</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>uploadAction</td><td>\u8BF7\u6C42\u63A5\u53E3\uFF08post \u8BF7\u6C42\uFF09</td><td>string</td><td><a href="http://10.10.77.223:9083/cityai/common/uploadAndCompress" target="_blank">\u70B9\u51FB\u67E5\u770B</a></td></tr><tr><td>data</td><td>\u63A5\u53E3\u9700\u8981\u7684\u53C2\u6570\u6216\u8005\u6587\u4EF6\u76F8\u5173\u5C5E\u6027</td><td>Object</td><td>{}</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>\u81EA\u5B9A\u4E49</p></div><div class="van-doc-card"><h3 id="geng-xin-dian" tabindex="-1">\u66F4\u65B0\u70B9</h3><ul><li>\u91CD\u5199 oversize \u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4E0E\u539F\u6765\u4E00\u6837</li><li>\u91CD\u5199 delete \u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4E0E\u539F\u6765\u4E00\u6837</li><li>\u91CD\u5199 after-read \u65B9\u6CD5\uFF0C\u901A\u8FC7\u63A5\u53E3\u5904\u7406\u6570\u636E\uFF0C\u8FD4\u56DE\u56FE\u7247\u5217\u8868 innerFiles[]\u548C\u5BF9\u5E94\u7684 files[]</li><li>accept \u7684\u6821\u9A8C\u4EA4\u7ED9\u4E86\u4F7F\u7528\u8005\uFF0C\u53EF\u4EE5\u5728 before-read \u65B9\u6CD5\u8FDB\u884C\u5904\u7406</li><li>vant3 \u7684 multiple \u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528\uFF0C\u6839\u636E max-count \u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C multiple \u4E3A false\uFF0Cmax-count \u9ED8\u8BA4\u4E3A 1\u3002multiple \u4E3A ture\uFF0Cmax-count \u9ED8\u8BA4\u4E3A 3\uFF0C\u5982\u4F7F\u7528\u8005\u5B9A\u4E49\u4E86\u6539\u503C\uFF0C\u8FDB\u884C\u8BFB\u53D6\u8986\u76D6</li><li>slots \u65B9\u6CD5\u4F7F\u7528\u8005\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49</li></ul></div><div class="van-doc-card"><h3 id="ji-hua-xia-ci-die-dai-dian" tabindex="-1">\u8BA1\u5212\u4E0B\u6B21\u8FED\u4EE3\u70B9</h3><ul><li>\u662F\u5426\u9700\u8981\u6C34\u5370</li><li>\u662F\u5426\u9700\u8981\u538B\u7F29</li></ul></div>`,9),H={__name:"README",setup(a,{expose:s}){return s({frontmatter:{}}),(t,n)=>(r(),o("div",B,[h(`
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/uploader/README.md
 * @Date: 2022-03-22 10:22:02
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 14:36:09
 * @Description:
`),V]))}},m={name:"mobile-ui",build:{css:{preprocessor:"less"},site:{publicPath:"./"},vetur:{tagPrefix:"cmm-"}},site:{title:"mobile-ui",logo:"https://img.yzcdn.cn/vant/logo.png",nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"list",title:"List\u5217\u8868"},{path:"form",title:"form\u8868\u5355"},{path:"uploader",title:"\u4E0A\u4F20\u7EC4\u4EF6"},{path:"swipe",title:"\u8F6E\u64AD"}]}]},css:{requireModuleExtension:!0}},X={Home:C,Quickstart:I,Form:F,List:R,Swipe:U,Uploader:H},J="1.0.2",K=navigator.userAgent.toLowerCase(),ss=/ios|iphone|ipod|ipad|android/.test(K);function as(a,s="-"){return a.replace(/([a-z\d])([A-Z])/g,"$1"+s+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+s+"$2").toLowerCase()}function ns(a){const s=document.createElement("textarea");s.value=a,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s);const l=document.getSelection();if(!l)return;const t=l.rangeCount>0?l.getRangeAt(0):!1;s.select(),document.execCommand("copy"),document.body.removeChild(s),t&&(l.removeAllRanges(),l.addRange(t))}const g="zh-CN",Z="en-US",b="vant-cli-lang";let d=g;function ts(){return d}function ls(a){d=a,localStorage.setItem(b,a)}function ps(a){const s=localStorage.getItem(b);if(s){d=s;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){d=g;return}d=a||Z}let j=[],f=!1;function G(a){f?a():j.push(a)}window.top===window?window.addEventListener("message",a=>{a.data.type==="iframeReady"&&(f=!0,j.forEach(s=>s()),j=[])}):window.top.postMessage({type:"iframeReady"},"*");function v(){var l,t;const a=window.vueRouter,{path:s}=a.currentRoute.value;return(l=m.site.simulator)!=null&&l.routeMapper?(t=m.site.simulator)==null?void 0:t.routeMapper(s):s}function es(){window.top.postMessage({type:"replacePath",value:v()},"*")}function cs(){const a=document.querySelector("iframe");a&&G(()=>{a.contentWindow.postMessage({type:"replacePath",value:v()},"*")})}function rs(a){window.addEventListener("message",s=>{var t,n;if(((t=s.data)==null?void 0:t.type)!=="replacePath")return;const l=((n=s.data)==null?void 0:n.value)||"";a.currentRoute.value.path!==l&&a.replace(l).catch(()=>{})})}export{Y as _,Q as a,m as b,ns as c,ps as d,X as e,cs as f,as as g,ts as h,ss as i,es as j,rs as l,J as p,ls as s};
