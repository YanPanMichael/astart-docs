import{_ as s,o as n,c as a,a as l}from"./app.3fd4cd1e.js";const A=JSON.parse('{"title":"ts module\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848","description":"","frontmatter":{},"headers":[],"relativePath":"templates/ts-module.md","lastUpdated":1667323052000}'),o={name:"templates/ts-module.md"},p=l(`<h1 id="ts-module\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848" tabindex="-1">ts module\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#ts-module\u521D\u59CB\u5316\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h1><ul><li>\u7ED3\u5408struk\u548Cqk-release\u751F\u6210\u6700\u4F73\u521D\u59CB\u5316ts module\u5B9E\u4F8B\u9879\u76EE\u3002</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;template-seed-ts-module&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;version&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0.0.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;description&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;seed typescript module&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;main&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/bundle.cjs.min.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;module&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/bundle.esm.min.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;unpkg&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/bundle.umd.min.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;devMain&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;src/index.ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;typings&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/types/index.d.ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;files&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;dist&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;test&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;cross-env BABEL_ENV=test NODE_ENV=testing jest --coverage&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;test:watch&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;jest --watch&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;cross-env NODE_ENV=production struk build --source=ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;lint&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;eslint . --ext .ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;fix&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;eslint . --fix&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;format&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;prettier --write .&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;release&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;qkrelease&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;changelog:help&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;conventional-changelog --help&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;changelog&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;conventional-changelog -p simple -i CHANGELOG.md -s -r 0&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;license&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;MIT&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;dependencies&quot;</span><span style="color:#ABB2BF;">: {},</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;devDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@commitlint/prompt&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^16.2.4&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@types/jest&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^27.0.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@types/node&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~16.11&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@typescript-eslint/eslint-plugin&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~5.14&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@typescript-eslint/parser&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~5.14&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;babel-jest&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^27.3.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;cross-env&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;5.2.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;eslint&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~8.11&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;eslint-config-prettier&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~8.5&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;eslint-plugin-jest&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^26.1.5&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;jest&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~27.5&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;qk-release&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.1.2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;struk&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.1.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ts-jest&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^27.1.4&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;validate-commit-msg&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.14.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@commitlint/cli&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^11.0.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@commitlint/config-conventional&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^11.0.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;conventional-changelog-cli&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.1.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;husky&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^4.3.8&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,3),e=[p];function t(B,c,r,u,y,i){return n(),a("div",null,e)}const F=s(o,[["render",t]]);export{A as __pageData,F as default};
