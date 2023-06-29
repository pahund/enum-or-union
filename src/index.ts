type Foo = "BAR" | "BAZ" | "XYZZY";

function heyFoo(hey: Foo) {
  console.log(`Hey ${hey}`);
}

heyFoo("BAR");
heyFoo("BAZ");
heyFoo("XYZZY");
