function n() {
  var a;
  try {
    a = parent.document.URL;
  } catch (b) {
    a = "";
  }
  a = a.match(/\?infinity$/) ? 1e100 : 9999500;
  function c(a, b) {
    return "undefined" !== typeof a ? a : b;
  }
  this.d = function () {
    return new Date().getTime();
  };
  this.getTime = function () {
    var a = this.d() - this.e,
      a = this.b + this.speed(a),
      a = Math.min(a, this.g);
    return (a = Math.max(a, this.h));
  };
  this.a = function (a) {
    this.b = this.getTime();
    this.e = this.d();
    this.speed =
      "function" === typeof a
        ? a
        : function (b) {
            return b * a;
          };
  };
  this.c = function () {
    return (this.speed(1e3) - this.speed(0)) / 1e3;
  };
  this.f = function () {
    var a = this.speed;
    this.a(function (b) {
      return 4 * a(b);
    });
  };
  this.stop = function () {
    this.a(0);
  };
  this.i = function (a) {
    this.b += a;
  };
  this.h = c(0, 0);
  this.g = c(a, 1e100);
  this.b = c(0, 0);
  this.e = this.d();
  this.speed = function (a) {
    return a;
  };
  this.a(c(0, 1));
}
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
window.requestAnimationFrame ||
  (window.requestAnimationFrame = function (a) {
    var b = 0,
      c = Math.max(0, 16 - b);
    return window.setTimeout(function () {
      var c = new Date().getTime();
      a(c);
      b = new Date().getTime() - c;
    }, c);
  });
var p, t, u, v, x, y, z;
function A(a, b, c) {
  var d = document.getElementById(a),
    i = document.createElement("canvas");
  i.setAttribute("width", 30);
  i.setAttribute("height", 30);
  d.appendChild(i);
  d.onclick = function () {
    B();
    document.getElementById(a).className = "on";
    b();
  };
  d.onmouseover = function () {
    this.style.border = "solid 1px rgba(0,0,0,0.1)";
  };
  d.onmouseout = function () {
    this.style.border = "";
  };
  c(i);
  return d;
}
function B() {
  for (var a = document.getElementById("controls").childNodes, b = 0; b < a.length; b++) a[b].className = "off";
}
function F(a, b, c, d) {
  var d = b + 0.85 * c * d,
    i = 0.5 - c / 2,
    c = 0.5 + c / 2,
    h = a.getContext("2d");
  h.save();
  h.scale(a.width, a.height);
  h.beginPath();
  h.moveTo(b, i);
  h.lineTo(d, 0.5);
  h.lineTo(b, c);
  h.closePath();
  h.lineJoin = "round";
  h.fillStyle = "#fff";
  h.fill();
  h.lineWidth = 1 / a.width;
  h.strokeStyle = "rgba(0,0,0,0.2)";
  h.stroke();
  h.restore();
}
function G(a) {
  F(a, 0.44, 0.4, -1);
  F(a, 0.8, 0.4, -1);
}
function H(a) {
  F(a, 0.56, 0.4, 1);
  F(a, 0.2, 0.4, 1);
}
function I(a) {
  F(a, 0.7, 0.6, -1);
}
function J(a) {
  F(a, 0.3, 0.6, 1);
}
function K(a) {
  var b = a.getContext("2d");
  b.save();
  b.scale(a.width, a.height);
  b.beginPath();
  b.rect(0.25, 0.25, 0.5, 0.5);
  b.lineJoin = "round";
  b.fillStyle = "#fff";
  b.fill();
  b.lineWidth = 1 / a.width;
  b.strokeStyle = "rgba(0,0,0,0.2)";
  b.stroke();
  b.restore();
}
function L(a, b) {
  var c = a * v,
    d = b * v;
  return Math.acos(Math.cos(c) * Math.cos(d) + Math.sin(c) * Math.sin(d)) / v;
}
function M(a, b, c, d, i, h, q, r, k) {
  if (i >= d.length) a.push(h), b.push(q), c.push(r);
  else {
    var e = d[i],
      m = i + 1 < d.length ? d[i + 1] : 0,
      l = (0.4 * r * v) / (e + 3.4);
    m && ((l *= 0.93), 2 === m && (l *= 1.2), 3 === m && 7 >= e && (l *= 1.12), 4 === m && 7 >= e && (l *= 1.08));
    var r = r - l,
      j;
    j = k + (4 === e ? -t : -u);
    for (var s = v / e, f = 0; f < e; f++) {
      var g = j + f * s;
      M(a, b, c, d, i + 1, h + r * Math.cos(g), q + r * Math.sin(g), l, 2 === m ? g - u : k);
    }
  }
}
function N(a) {
  if (1 >= a) return [];
  var b = O(a),
    a = N(a / b);
  a.push(b);
  return a;
}
function O(a) {
  if (0 === a % 4) return 4;
  if (0 === a % 2) return 2;
  for (var b = (Math.sqrt(a) + 1) | 0, c = 3; c <= b; c += 2) if (0 === a % c) return c;
  return a;
}
function P(a, b) {
  var c;
  if (1 > b.length) c = "";
  else if (1 >= b.length && 4 !== b[0]) c = "prime";
  else {
    c = "";
    for (var d = 0; d < b.length; d++) {
      "" !== c && (c += '<span class="times">&times;</span>');
      var i = b[d];
      c = 4 == i ? c + '2<span class="times">&times;</span>2' : c + i;
    }
  }
  return '<span class="number">' + a + '</span><br><span class="decomposition">' + c + "</span>";
}
function Q() {
  var a,
    b = 0,
    c = (a = 0),
    d = 0;
  try {
    b = window.innerWidth;
  } catch (i) {}
  try {
    a = window.innerHeight;
  } catch (h) {}
  try {
    c = screen.availWidth;
  } catch (q) {}
  try {
    d = screen.availHeight;
  } catch (r) {}
  d && (d -= 70);
  b = b ? b : c;
  a = a ? a : d;
  b || (b = 974);
  a || (a = 718);
  a = Math.min(b, a);
  a = Math.max(a, 350);
  var k = Math.round(0.45 * (a - 90)),
    k = Math.max(k, 50),
    k = Math.min(k, 600),
    e = 2 * k + 1;
  if (e != canvas.width || e != canvas.height) (canvas.width = e), (canvas.height = e), (a = Math.round(-e / 2) + "px"), (canvas.style.marginLeft = a), (canvas.style.marginTop = a);
  var m = e / 2,
    l = e / 2;
  a = y.getTime() + 700;
  var j;
  j = Math.max((a / 1e3) | 0, 1);
  var s = j + 1,
    f = a - 500 - 1e3 * j,
    f = 3 * (f / 1e3),
    f = Math.max(f, 0),
    f = Math.min(f, 1),
    f = 0.5 - 0.5 * Math.cos(f * x),
    g = N(j);
  a = [];
  d = [];
  b = [];
  M(a, d, b, g, 0, m, l, k * (1 - 0.6 / (j + 1)), 0);
  var w = N(s),
    c = [],
    C = [],
    D = [];
  M(c, C, D, w, 0, m, l, k * (1 - 0.6 / (s + 1)), 0);
  k = document.getElementById("status1");
  m = document.getElementById("status2");
  k.innerHTML = P(j, g);
  m.innerHTML = P(s, w);
  j = 0.7 / (1 - f + f * f);
  k.style.opacity = 0.001 > j * (1 - f) ? 0.001 : 0.999 < j * (1 - f) ? 0.999 : j * (1 - f);
  m.style.opacity = 0.001 > j * f ? 0.001 : 0.999 < j * f ? 0.999 : j * f;
  p.clearRect(0, 0, e, e);
  e = f;
  j = a.length;
  g = c.length;
  s = 1 / j;
  f = 1 / g;
  k = 1 - e;
  for (g -= 1; 0 <= g; g--) {
    var E;
    g < j ? ((w = k * b[g] + e * D[g]), (m = k * g * s + e * g * f), (l = k * a[g] + e * c[g]), (E = k * d[g] + e * C[g])) : ((w = e * D[g]), (m = g * f), (l = k * a[j - 1] + e * c[g]), (E = k * d[j - 1] + e * C[g]));
    p.fillStyle = z[(m * z.length) | 0];
    p.beginPath();
    p.arc(l, E, w, 0, v, !0);
    p.fill();
  }
  window.requestAnimationFrame(Q);
}
window.start = function () {
  const urlParams = new URLSearchParams(window.location.search)
  const bpm = urlParams.has('bpm') ? parseFloat(urlParams.get('bpm')) : 0
  // 120 => 121 actually, 60 => 60.5...  this isn't exactly right but it's enough to feel okay
  const default_speed = bpm ? bpm/60.5 : urlParams.has('speed') ? parseFloat(urlParams.get('speed')) : 1
  canvas = document.getElementById("canvas");
  if (!canvas.getContext || !canvas.getContext("2d")) {
    var a = document.getElementById("frame"),
      b = document.createElement("div");
    b.setAttribute("id", "error");
    b.innerHTML = 'To view this visualization, upgrade to a modern web browser like <a href="http://www.google.com/chrome/">Chrome</a>.';
    a.appendChild(b);
  } else {
    p = canvas.getContext("2d");
    t = Math.PI / 4;
    u = Math.PI / 2;
    v = 2 * Math.PI;
    x = Math.PI;
    y = new n();
    for (var a = 1e3, b = [], c = 0, a = 1e3; c < a; c++) {
      var d = c / a + 0.9,
        i = 766.5 * Math.max(1 / 3 - L(1 / 6, d), 0),
        h = 766.5 * Math.max(1 / 3 - L(0.5, d), 0),
        d = 766.5 * Math.max(1 / 3 - L(5 / 6, d), 0),
        q = Math.sqrt(4e4 / (2 * i * i + 3 * h * h + d * d)),
        i = Math.round(i * q),
        h = Math.round(h * q),
        d = Math.round(d * q);
      b[c] = "rgb(" + i + "," + h + "," + d + ")";
    }
    z = b;
    A(
      "fast_backward",
      function () {
        -2 < y.c() ? y.a(-4) : -100 < y.c() && y.f();
      },
      G
    );
    A(
      "play_backward",
      function () {
        y.a(-default_speed);
      },
      I
    );
    A(
      "stop",
      function () {
        y.a(0);
      },
      K
    );
    a = A(
      "play_forward",
      function () {
        y.a(default_speed);
      },
      J
    );
    A(
      "fast_forward",
      function () {
        2 > y.c() ? y.a(4) : 100 > y.c() && y.f();
      },
      H
    );
    B();
    a.onclick();
    window.requestAnimationFrame(Q);
  }
};
