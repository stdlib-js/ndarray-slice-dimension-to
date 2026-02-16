<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sliceDimensionTo

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a read-only truncated view of an input [`ndarray`][@stdlib/ndarray/ctor] along a specified dimension.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sliceDimensionTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice-dimension-to@deno/mod.js';
```

#### sliceDimensionTo( x, dim, stop\[, options] )

Returns a **read-only** truncated view of an input [`ndarray`][@stdlib/ndarray/ctor] along a specified dimension.

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = sliceDimensionTo( x, 0, 2 );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **dim**: index of dimension along which to slice. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **stop**: ending index (exclusive). If provided an integer less than zero, the corresponding element along the specified dimension is resolved relative to the last element along that dimension. For negative integers, the last element corresponds to the value `-1`.
-   **options**: function options.

The function supports the following `options`:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided an ending index which exceeds array bounds. To return an empty array when an ending index exceeds array bounds, set the `strict` option to `false`.

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = sliceDimensionTo( x, 1, -20, {
    'strict': false
});
// returns <ndarray>

sh = y.shape;
// returns [ 3, 0 ]

arr = ndarray2array( y );
// returns []
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@deno/mod.js';
import sliceDimensionTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice-dimension-to@deno/mod.js';

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
    'shape': [ 3, 3, 3 ]
});

// Get the first two rows of each matrix:
var y1 = sliceDimensionTo( x, 1, 2 );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ [ [ 0, 1, 2 ], [ 3, 4, 5 ] ], [ [ 9, 10, 11 ], [ 12, 13, 14 ] ], [ [ 18, 19, 20 ], [ 21, 22, 23 ] ] ]

// Get the first columns of each matrix:
var y2 = sliceDimensionTo( x, 2, 2 );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ [ 0, 1 ], [ 3, 4 ], [ 6, 7 ] ], [ [ 9, 10 ], [ 12, 13 ], [ 15, 16 ] ], [ [ 18, 19 ], [ 21, 22 ], [ 24, 25 ] ] ]

// Get the first two matrices:
var y3 = sliceDimensionTo( x, 0, 2 );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ], [ [ 9, 10, 11 ], [ 12, 13, 14 ], [ 15, 16, 17 ] ] ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice-dimension`][@stdlib/ndarray/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray when sliced along a specified dimension.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice-dimension-from`][@stdlib/ndarray/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a read-only shifted view of an input ndarray along a specific dimension.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice-to`][@stdlib/ndarray/slice-to]</span><span class="delimiter">: </span><span class="description">return a read-only truncated view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-slice-dimension-to.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-slice-dimension-to

[test-image]: https://github.com/stdlib-js/ndarray-slice-dimension-to/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-slice-dimension-to/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-slice-dimension-to/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-slice-dimension-to?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-slice-dimension-to.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-slice-dimension-to/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-slice-dimension-to/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-slice-dimension-to/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-slice-dimension-to/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-slice-dimension-to/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-slice-dimension-to/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-slice-dimension-to/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-slice-dimension-to/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-slice-dimension-to/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray-slice/tree/deno

[@stdlib/ndarray/slice-dimension]: https://github.com/stdlib-js/ndarray-slice-dimension/tree/deno

[@stdlib/ndarray/slice-dimension-from]: https://github.com/stdlib-js/ndarray-slice-dimension-from/tree/deno

[@stdlib/ndarray/slice-to]: https://github.com/stdlib-js/ndarray-slice-to/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
