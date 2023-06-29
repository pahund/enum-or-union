type Foo = "BAR" | "BAZ" | "XYZZY"

export default function heyFoo(hey: Foo) {
  console.log(`Hey ${hey}`);
}

heyFoo("BAR");
