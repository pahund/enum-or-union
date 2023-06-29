enum Foo {
  BAR,
  BAZ,
  XYZZY
}

function heyFoo(hey: Foo) {
  console.log(`Hey ${hey}`);
}

heyFoo(Foo.BAR);
heyFoo(Foo.BAZ);
heyFoo(Foo.XYZZY);
