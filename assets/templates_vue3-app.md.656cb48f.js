import{_ as s,o as n,c as a,a as p}from"./app.3fd4cd1e.js";const A=JSON.parse('{"title":"vue3 app\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848","description":"","frontmatter":{},"headers":[],"relativePath":"templates/vue3-app.md","lastUpdated":1667323052000}'),l={name:"templates/vue3-app.md"},o=p(`<h1 id="vue3-app\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848" tabindex="-1">vue3 app\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#vue3-app\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h1><ul><li>\u751F\u6210vue3\u6700\u4F73\u521D\u59CB\u5316app\u5B9E\u4F8B\u751F\u6210\u79CD\u5B50\u9879\u76EE\u3002</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vite-vue3-app&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;version&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0.0.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;license&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;MIT&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vite&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;dev:module1&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;build:module1&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vue-tsc --noEmit --skipLibCheck &amp;&amp; cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite build&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;dev-prod&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vite --mode production&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vue-tsc --noEmit --skipLibCheck &amp;&amp; vite build&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;serve&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vite preview&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;dependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@types/node&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^14.14.41&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ant-design-vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.1.6&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;axios&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^0.21.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;cross-env&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^7.0.3&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;element-plus&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.0.2-beta.45&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;esbuild&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^0.11.12&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;sass&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.32.8&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vant&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^3.0.17&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^3.0.11&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-i18n&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^9.1.6&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-router&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^4.0.5&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vuex&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^4.0.0&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;devDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vitejs/plugin-vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.2.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vue/compiler-sfc&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^3.0.5&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;typescript&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^4.1.3&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vite&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.2.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vite-plugin-style-import&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^0.9.2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-tsc&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^0.0.22&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,3),e=[o];function t(B,c,r,u,y,i){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{A as __pageData,F as default};
